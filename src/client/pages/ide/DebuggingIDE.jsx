import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { ref, set, update } from 'firebase/database';
import { runDebuggingProblem } from '@/lib/codeRunner';
import { ALL_PROBLEMS } from '@/lib/constants';
import { realDb } from '@/lib/firebase';

const DebuggingIDE = () => {
  const { team, problemId } = useParams();
  const navigate = useNavigate();
  const problem = ALL_PROBLEMS.find((p) => p.id === problemId);

  const [code, setCode] = useState(problem.buggedCode || '// Bugged code goes here');
  const [timeLeft, setTimeLeft] = useState(() => {
    const storedTime = localStorage.getItem(`timer-${problemId}`);
    return storedTime ? parseInt(storedTime, 10) : problem.time_limit * 60;
  });
  const [testCaseResults, setTestCaseResults] = useState([]);
  const [selectedTestCase, setSelectedTestCase] = useState(null);
  const [testCasesPassed, setTestCasesPassed] = useState(false);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    if (timeLeft === 0) {
      update(ref(realDb, `allotments/${team}/biddedQuestions/${problemId}`), {
        status: 'time up'
      });
      navigate(`/editor/${team}`);
    }
  }, [timeLeft, navigate, problemId, team]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleRun = async () => {
    setLoading(true);
    const response = await runDebuggingProblem(code, problem.language, problem.testCases);
    setLoading(false);
    if (Array.isArray(response)) {
      setTestCaseResults(response);
      setTestCasesPassed(response.every((result) => result.passed));
      setSelectedTestCase(response[0]);
    } else {
      console.error('Error in test case execution:', response.error || 'Unknown error');
      setTestCaseResults([]);
      setTestCasesPassed(false);
    }
  };

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
    <div className="debugging-ide-container bg-gray-900 min-h-screen text-gray-100 font-poppins flex">
      {/* Left Pane - Problem Details */}
      <div className="w-1/3 p-6 bg-gray-800 border-r border-gray-700 space-y-4">
        <h2 className="text-2xl font-bold mb-2">{problem.title}</h2>
        <p className="text-gray-300 mb-4">{problem.description}</p>
        <div className="p-2 bg-gray-700 text-gray-100 rounded">
          <strong>Bugged Code:</strong>
          <pre className="mt-2 text-sm whitespace-pre-wrap bg-gray-800 p-2 rounded-lg">
            {problem.buggedCode}
          </pre>
        </div>

      </div>

      {/* Right Pane - Code Editor and Test Case Results */}
      <div className="w-2/3 p-6 flex flex-col space-y-4">
        {/* Language Display */}
        <div className="flex justify-between items-center">
          <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded">
            Language: {problem.language}
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
        <div className="flex-1 border border-gray-700 rounded-lg overflow-hidden" style={{ height: '50%' }}>
          <Editor
            height="100%"
            defaultLanguage={problem.language}
            language={problem.language}
            value={code}
            onChange={(value) => setCode(value)}
            theme="vs-dark"
            options={{ fontSize: 16 }} // Increased font size
          />
        </div>

       {/* Test Case Results with Loader */}
       <div className="flex-1 border border-gray-700 rounded-lg p-4 space-y-4 overflow-auto">
          <h3 className="text-lg font-semibold">Test Case Results:</h3>
          {loading ? (
            <div className="text-center py-4">
              <span className="loader" /> {/* Placeholder for loader styling */}
            </div>
          ) : (
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
          )}

          {/* Selected Test Case Details */}
          {!loading && selectedTestCase ? (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg space-y-2">
              <h4 className="font-semibold">Test Case Details:</h4>
              <div><strong>Description:</strong> {selectedTestCase.description}</div>
              <div><strong>Passed:</strong> {selectedTestCase.passed ? 'Yes' : 'No'}</div>
            </div>
          ) : !loading && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg text-gray-300">
              Run the code to view test case results.
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

export default DebuggingIDE;