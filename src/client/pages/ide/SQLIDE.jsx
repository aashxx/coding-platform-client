import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { push, ref, remove } from 'firebase/database';
import { runSQLProblem } from '@/lib/codeRunner'; // Assume this function exists for SQL test case validation
import { ALL_PROBLEMS } from '@/lib/constants';
import { realDb } from '@/lib/firebase';

const SQLIDE = () => {
  const { team, problemId } = useParams();
  const navigate = useNavigate();
  const problem = ALL_PROBLEMS.find((p) => p.id === problemId);

  const [query, setQuery] = useState(problem.existingCode || '-- Write your SQL query here');
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
      navigate(`/editor/${team}`);
    }
  }, [timeLeft, navigate, problemId, team]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Run the SQL query to check if it passes all test cases
  const handleRun = async () => {
    const results = await runSQLProblem(query, problem.testCases);
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
    <div className="sql-ide-container bg-gray-900 min-h-screen text-gray-100 font-poppins flex">
      {/* Left Pane - Problem Details */}
      <div className="w-1/3 p-6 bg-gray-800 border-r border-gray-700 space-y-4">
        <h2 className="text-2xl font-bold mb-2">{problem.title}</h2>
        <p className="text-gray-300 mb-4">{problem.description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="bg-indigo-600 text-gray-100 px-4 py-2 rounded-full font-semibold">
            Time Remaining: {formatTime(timeLeft)}
          </div>
          <div className="bg-gray-700 text-gray-100 p-2 rounded">Language: SQL</div>
        </div>
      </div>

      {/* Right Pane - SQL Query Editor */}
      <div className="w-2/3 p-6 flex flex-col">
        <div className="flex-1 border border-gray-700 rounded-lg overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="sql"
            language="sql"
            value={query}
            onChange={(value) => setQuery(value)}
            theme="vs-dark"
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

        {/* Test Case Results */}
        <div className="mt-4 text-gray-100">
          <h3>Test Case Results:</h3>
          <ul>
            {testCaseResults.map((result, idx) => (
              <li key={idx} className="flex flex-col space-y-1 border-b border-gray-700 pb-2 mb-2">
                <div className="flex items-center space-x-2">
                  <span>{result.passed ? '✅' : '❌'}</span>
                  <span>Test Case {idx + 1}</span>
                </div>
                <div className="ml-4">
                  <div>Expected Rows: {result.expectedRowCount}, Actual Rows: {result.actualRowCount}</div>
                  <div>Expected Data: {JSON.stringify(result.expectedData)}</div>
                  <div>Actual Data: {JSON.stringify(result.actualData)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SQLIDE;
