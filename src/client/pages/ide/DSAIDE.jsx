import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { push, ref, remove } from 'firebase/database';
import { runDSAProblem } from '@/lib/codeRunner';
import { ALL_PROBLEMS } from '@/lib/constants';
import { realDb } from '@/lib/firebase';

const DSAIDE = () => {
  const { team, problemId } = useParams();
  const navigate = useNavigate();
  const problem = ALL_PROBLEMS.find((p) => p.id === problemId);

  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState(problem.existingCode[language] || '// Write your solution here');
  const [timeLeft, setTimeLeft] = useState(() => {
    const storedTime = localStorage.getItem(`timer-${problemId}`);
    return storedTime ? parseInt(storedTime, 10) : problem.time_limit * 60;
  });
  const [testCaseResults, setTestCaseResults] = useState([]);
  const [selectedTestCase, setSelectedTestCase] = useState(null);
  const [testCasesPassed, setTestCasesPassed] = useState(false);

  // Update code template when language changes
  useEffect(() => {
    setCode(problem.existingCode[language]);
  }, [language, problem]);

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
      navigate(`/editor/${team}`);
    }
  }, [timeLeft, navigate, problemId, team]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Run the code to check if it passes all test cases
  const handleRun = async () => {
    const results = await runDSAProblem(code, problem.testCases, language);
    setTestCaseResults(results);
    setTestCasesPassed(results.every((result) => result.passed));
    setSelectedTestCase(results[0] || null); // Select the first test case by default
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
    navigate(`/editor/${team}`);
  };

  return (
    <div className="dsa-ide-container bg-gray-900 min-h-screen text-gray-100 font-poppins flex">
      {/* Left Pane - Problem Details */}
      <div className="w-1/3 p-6 bg-gray-800 border-r border-gray-700 space-y-4">
        <h2 className="text-2xl font-bold mb-2">{problem.title}</h2>
        <p className="text-gray-300 mb-4">{problem.description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="bg-indigo-600 text-gray-100 px-4 py-2 rounded-full font-semibold">
            Time Remaining: {formatTime(timeLeft)}
          </div>
          <select
            className="bg-gray-700 text-gray-100 p-2 rounded"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
          </select>
        </div>
      </div>

      {/* Right Pane - Code Editor and Test Case Results */}
      <div className="w-2/3 p-6 flex flex-col space-y-4">
        {/* Code Editor */}
        <div className="border border-gray-700 rounded-lg overflow-hidden" style={{ height: '50%' }}>
          <Editor
            height="100%"
            defaultLanguage={language}
            language={language}
            value={code}
            onChange={(value) => setCode(value)}
            theme="vs-dark"
          />
        </div>

        {/* Test Case Tabs and Details */}
        <div className="flex-1 border border-gray-700 rounded-lg p-4 space-y-4 overflow-auto">
          <h3 className="text-lg font-semibold">Test Case Results:</h3>
          <div className="flex space-x-4 overflow-x-auto">
            {testCaseResults.map((result, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTestCase(result)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedTestCase === result ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-100'
                }`}
              >
                {result.passed ? `✅ Test Case ${idx + 1}` : `❌ Test Case ${idx + 1}`}
              </button>
            ))}
          </div>

          {selectedTestCase && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg space-y-2">
              <h4 className="font-semibold">Test Case Details:</h4>
              <div><strong>Input:</strong> {selectedTestCase.input}</div>
              <div><strong>Expected Output:</strong> {selectedTestCase.expectedOutput}</div>
              <div><strong>Actual Output:</strong> {selectedTestCase.output}</div>
              <div><strong>Passed:</strong> {selectedTestCase.passed ? 'Yes' : 'No'}</div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
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
            onClick={() => navigate(`/editor/${team}`)}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DSAIDE;