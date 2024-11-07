import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { push, ref, set, update } from 'firebase/database';
import { runWebProgramCode } from '@/lib/codeRunner';
import { ALL_PROBLEMS } from '@/lib/constants';
import { realDb } from '@/lib/firebase';

const WebProgrammingIDE = () => {
  const { team, problemId } = useParams();
  const navigate = useNavigate();
  const problem = ALL_PROBLEMS.find((p) => p.id === problemId);

  const [htmlCode, setHtmlCode] = useState(problem.existingCode.html || '<!-- HTML code here -->');
  const [cssCode, setCssCode] = useState(problem.existingCode.css || '/* CSS code here */');
  const [jsCode, setJsCode] = useState(problem.existingCode.js || '// JavaScript code here');
  const [activeTab, setActiveTab] = useState('html');
  const [testCaseResults, setTestCaseResults] = useState([]);
  const [testCasesPassed, setTestCasesPassed] = useState(false);
  const [loading, setLoading] = useState(false);

  // Timer Countdown and Local Storage Synchronization
  const [timeLeft, setTimeLeft] = useState(() => {
    const storedStartTime = localStorage.getItem(`startTime-${problemId}`);
    const defaultTimeLimit = problem.time_limit * 60;
    
    if (storedStartTime) {
      const elapsed = Math.floor((Date.now() - parseInt(storedStartTime, 10)) / 1000);
      return Math.max(defaultTimeLimit - elapsed, 0);
    } else {
      localStorage.setItem(`startTime-${problemId}`, Date.now());
      return defaultTimeLimit;
    }
  });
  
  useEffect(() => {
    if (timeLeft <= 0) return;
  
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        if (newTime <= 0) {
          clearInterval(timer);
          localStorage.removeItem(`startTime-${problemId}`);
          update(ref(realDb, `allotments/${team}/biddedQuestions/${problemId}`), {
            status: 'time up'
          });
          navigate(`/editor/${team}`);
        }
        return newTime;
      });
    }, 1000);
  
    return () => clearInterval(timer);
  }, [timeLeft, problemId, team, navigate]);  



  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Compile HTML, CSS, and JS for the iframe
  const generatePreview = () => {
    const iframeContent = `
      <html>
        <head><style>${cssCode}</style></head>
        <body>
          ${htmlCode}
          <script>${jsCode}<\/script>
        </body>
      </html>
    `;
    return iframeContent;
  };

  // Run test cases for the web code
  const handleRun = async () => {
    setLoading(true);
    const response = await runWebProgramCode(htmlCode, cssCode, jsCode, problem.id);
    setLoading(false);
  
    if (response.success) {
      setTestCaseResults(response.testResults);
      setTestCasesPassed(response.allPassed);
    } else {
      setTestCaseResults([{ description: "Error executing code", passed: false }]);
      setTestCasesPassed(false);
    }
  };

  // Submit the solution to Firebase if all test cases passed
  const handleSubmit = async () => {
    if (!testCasesPassed) {
      alert('Please ensure all test cases pass before submitting.');
      return;
    }

    const timeTaken = problem.time_limit * 60 - timeLeft;

    try {
      await set(ref(realDb, `allotments/${team}/solved/${problem.id}`), {
        problemId: problem.id,
        points: problem.points,
        timeTaken
      });

      await update(ref(realDb, `allotments/${team}/biddedQuestions/${problem.id}`), {
        status: 'solved'
      });

      alert('Problem solved and recorded!');
      navigate(`/editor/${team}`);
    } catch (error) {
      console.error('Error updating solved problem:', error);
      alert('Failed to record the solved problem.');
    }
  };

  return (
    <div className="web-ide-container bg-gray-900 min-h-screen text-gray-100 font-poppins flex">
      {/* Left Pane - Problem Details */}
      <div className="w-1/3 p-6 bg-gray-800 border-r border-gray-700 space-y-4">
        <h2 className="text-2xl font-bold mb-2">{problem.title}</h2>
        <p className="text-gray-300 mb-4">{problem.description}</p>
      </div>

      {/* Right Pane - Code Editor and Preview */}
      <div className="w-2/3 p-6 flex flex-col overflow-y-auto space-y-4">
        {/* Language Selector */}
        <div className="flex justify-between items-center">
        <div className="flex space-x-4 mb-4">
          {['html', 'css', 'js'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold rounded ${
                activeTab === tab ? 'bg-indigo-500' : 'bg-gray-700'
              } text-gray-100`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex space-x-4">
            <div className="bg-indigo-600 text-gray-100 px-4 py-2 rounded-lg">
              Time Remaining: {formatTime(timeLeft)}
            </div>
            <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg">
              Points: {problem.points}
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 border border-gray-700 rounded-lg overflow-hidden">
          <Editor
            height="400px"
            defaultLanguage={activeTab}
            language={activeTab}
            value={activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : jsCode}
            onChange={(value) => {
              if (activeTab === 'html') setHtmlCode(value);
              else if (activeTab === 'css') setCssCode(value);
              else setJsCode(value);
            }}
            theme="vs-dark"
            options={{ fontSize: 16 }}
          />
        </div>

        {/* Live Preview */}
        <div className="border border-gray-700 rounded-lg overflow-hidden" style={{ height: '300px' }}>
          <iframe
            title="Live Preview"
            srcDoc={generatePreview()}
            sandbox="allow-scripts"
            className="w-full h-full bg-white"
          />
        </div>

        {/* Test Case Results with Loader */}
        <div className="border border-gray-700 rounded-lg p-4 space-y-4">
          <h3 className="text-lg font-semibold">Test Case Results:</h3>
          {loading ? (
            <div className="text-center py-4">
              <span className="loader" /> {/* Placeholder for loader styling */}
            </div>
          ) : (
            <ul>
              {testCaseResults.map((result, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span>{result.passed ? '✅' : '❌'}</span>
                  <span>Test Case {idx + 1} - {result.description}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-end space-x-4">
          <button
            className="bg-yellow-600 text-gray-100 font-semibold py-2 px-6 rounded hover:bg-yellow-700 transition"
            onClick={handleRun}
          >
            Run
          </button>
          <button
            className={`bg-green-600 text-gray-100 font-semibold py-2 px-6 rounded transition ${
              testCasesPassed ? 'hover:bg-green-700' : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={handleSubmit}
            disabled={!testCasesPassed}
          >
            Submit
          </button>
          <button
            className="bg-red-600 text-gray-100 font-semibold py-2 px-6 rounded hover:bg-red-700 transition"
            onClick={() => navigate('/problems')}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebProgrammingIDE;