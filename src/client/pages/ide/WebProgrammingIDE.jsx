import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { push, ref, remove } from 'firebase/database';
import { runWebProgramCode } from '@/lib/codeRunner'; // Custom function to validate web-based test cases
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
  const [timeLeft, setTimeLeft] = useState(() => {
    const storedTime = localStorage.getItem(`timer-${problemId}`);
    return storedTime ? parseInt(storedTime, 10) : problem.time_limit * 60;
  });
  const [testCaseResults, setTestCaseResults] = useState([]);
  const [testCasesPassed, setTestCasesPassed] = useState(false);

  // Timer Countdown and Local Storage Synchronization
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        localStorage.setItem(`timer-${problemId}`, newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, problemId]);

  // Handle timeout
  useEffect(() => {
    if (timeLeft === 0) {
      alert('Time is up!');
      remove(ref(realDb, `allotments/${team}/biddedQuestions/${problemId}`));
      navigate('/problems');
    }
  }, [timeLeft, navigate, problemId, team]);

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
    const results = await runWebProgramCode(htmlCode, cssCode, jsCode, problem.testCases);
    setTestCaseResults(results);
    const allPassed = results.every((result) => result.passed);
    setTestCasesPassed(allPassed);
  };

  // Submit the solution to Firebase if all test cases passed
  const handleSubmit = () => {
    if (!testCasesPassed) {
      alert('Please ensure all test cases pass before submitting.');
      return;
    }

    const timeTaken = problem.time_limit * 60 - timeLeft;
    push(ref(realDb, `solved/${team}`), {
      title: problem.title,
      points: problem.points,
      timeTaken,
    });

    alert('Problem solved and recorded!');
    navigate('/problems');
  };

  return (
    <div className="web-ide-container bg-gray-900 min-h-screen text-gray-100 font-poppins flex">
      {/* Left Pane - Problem Details */}
      <div className="w-1/3 p-6 bg-gray-800 border-r border-gray-700 space-y-4">
        <h2 className="text-2xl font-bold mb-2">{problem.title}</h2>
        <p className="text-gray-300 mb-4">{problem.description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="bg-indigo-600 text-gray-100 px-4 py-2 rounded-full font-semibold">
            Time Remaining: {formatTime(timeLeft)}
          </div>
          <div className="bg-gray-700 text-gray-100 p-2 rounded">Language: HTML/CSS/JS</div>
        </div>
      </div>

      {/* Right Pane - Code Editor and Preview */}
      <div className="w-2/3 p-6 flex flex-col">
        {/* Tabbed Editor for HTML, CSS, JS */}
        <div className="flex space-x-4 mb-4">
          <button onClick={() => setActiveTab('html')} className={`px-4 py-2 ${activeTab === 'html' ? 'bg-indigo-500' : 'bg-gray-700'} text-gray-100 font-semibold rounded`}>
            HTML
          </button>
          <button onClick={() => setActiveTab('css')} className={`px-4 py-2 ${activeTab === 'css' ? 'bg-indigo-500' : 'bg-gray-700'} text-gray-100 font-semibold rounded`}>
            CSS
          </button>
          <button onClick={() => setActiveTab('js')} className={`px-4 py-2 ${activeTab === 'js' ? 'bg-indigo-500' : 'bg-gray-700'} text-gray-100 font-semibold rounded`}>
            JavaScript
          </button>
        </div>

        {/* Display appropriate editor based on selected tab */}
        <div className="flex-1 border border-gray-700 rounded-lg overflow-hidden">
          {activeTab === 'html' && (
            <Editor
              height="100%"
              defaultLanguage="html"
              language="html"
              value={htmlCode}
              onChange={(value) => setHtmlCode(value)}
              theme="vs-dark"
            />
          )}
          {activeTab === 'css' && (
            <Editor
              height="100%"
              defaultLanguage="css"
              language="css"
              value={cssCode}
              onChange={(value) => setCssCode(value)}
              theme="vs-dark"
            />
          )}
          {activeTab === 'js' && (
            <Editor
              height="100%"
              defaultLanguage="javascript"
              language="javascript"
              value={jsCode}
              onChange={(value) => setJsCode(value)}
              theme="vs-dark"
            />
          )}
        </div>

        {/* Preview Area */}
        <div className="mt-4 border border-gray-700 rounded-lg overflow-hidden">
          <iframe
            title="Live Preview"
            srcDoc={generatePreview()}
            sandbox="allow-scripts"
            className="w-full h-64 bg-white"
          />
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
            className={`bg-green-600 text-gray-100 font-semibold py-2 px-6 rounded transition ${testCasesPassed ? 'hover:bg-green-700' : 'opacity-50 cursor-not-allowed'}`}
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

        {/* Test Case Results */}
        <div className="mt-4 text-gray-100">
          <h3>Test Case Results:</h3>
          <ul>
            {testCaseResults.map((result, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <span>{result.passed ? '✅' : '❌'}</span>
                <span>Test Case {idx + 1} - {result.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebProgrammingIDE;