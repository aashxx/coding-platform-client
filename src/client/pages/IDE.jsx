import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { realDb } from '@/lib/firebase';
import { ref, push, remove } from 'firebase/database';
import Editor from '@monaco-editor/react';
import { runCodeAgainstTestCases } from '@/lib/codeRunner'; // A function that simulates running code and checking test cases
import { ALL_PROBLEMS } from '@/lib/constants';

const IDE = () => {

  const { team, problemTitle } = useParams();
  const navigate = useNavigate();

  // Find the problem by title
  const problem = ALL_PROBLEMS.find((p) => p.title === problemTitle);

  const [timeLeft, setTimeLeft] = useState(problem.time_limit * 60); // Convert minutes to seconds
  const [language, setLanguage] = useState(problem.category === 'DSA & Problem Solving' ? 'python' : problem.language);
  const [code, setCode] = useState(problem.category === 'Debugging' ? problem.buggedCode : '// Code from here\n');
  const [testCasesPassed, setTestCasesPassed] = useState(false);

  // Calculate the start time to determine exact time taken when solved
  const startTime = problem.time_limit * 60;

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [timeLeft]);

  // Redirect and remove problem when time runs out
  useEffect(() => {
    if (timeLeft === 0) {
      alert('Time is up!');
      remove(ref(realDb, `allotments/${team}/biddedQuestions/${problemTitle}`)); // Remove problem from Firebase
      navigate('/problems'); // Redirect to problems page
    }
  }, [timeLeft, navigate, problemTitle, team]);

  // Format time for display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Run the code to check if it passes all test cases
  const handleRun = async () => {
    const passed = await runCodeAgainstTestCases(code, problem.testCases, language);
    setTestCasesPassed(passed);
    alert(passed ? 'All test cases passed!' : 'Some test cases failed.');
  };

  // Submit the solution to Firebase if all test cases passed
  const handleSubmit = () => {
    if (!testCasesPassed) {
      alert('Please make sure all test cases pass before submitting.');
      return;
    }

    const timeTaken = startTime - timeLeft; // Calculate exact time taken to solve

    // Create a solved record in Firebase
    push(ref(realDb, `solved/${team}`), {
      title: problem.title,
      points: problem.points,
      timeTaken,
    });

    alert('Problem solved and recorded!');
    navigate(`/editor/${team}`); // Redirect to problems page
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 font-poppins flex">
      {/* Left Pane - Problem Details */}
      <div className="w-1/3 p-6 bg-gray-800 border-r border-gray-700 space-y-4">
        <h2 className="text-2xl font-bold mb-2">{problem.title}</h2>
        <p className="text-gray-300 mb-4">{problem.description}</p>

        {problem.input && (
          <p className="text-gray-400 mb-2"><strong>Input:</strong> {problem.input}</p>
        )}
        {problem.output && (
          <p className="text-gray-400 mb-2"><strong>Output:</strong> {problem.output}</p>
        )}
        {problem.examples && (
          <div className="text-gray-400 mb-4">
            <strong>Examples:</strong>
            <pre className="bg-gray-700 p-3 rounded mt-2">
              {problem.examples}
            </pre>
          </div>
        )}
        {problem.category === 'Debugging' && problem.buggedCode && (
          <div className="text-gray-400">
            <strong>Bugged Code:</strong>
            <pre className="bg-gray-700 p-3 rounded mt-2">
              {problem.buggedCode}
            </pre>
          </div>
        )}
      </div>

      {/* Right Pane - Code Editor */}
      <div className="w-2/3 p-6 flex flex-col">
        {/* Timer and Language Selection */}
        <div className="flex justify-between items-center mb-4">
          <div className="bg-indigo-600 text-gray-100 px-4 py-2 rounded-full font-semibold">
            Time Remaining: {formatTime(timeLeft)}
          </div>
          {problem.category === 'DSA & Problem Solving' && (
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
          )}
        </div>

        {/* Code Editor */}
        <div className="flex-1 border border-gray-700 rounded-lg overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage={language}
            language={language}
            value={code}
            onChange={(value) => setCode(value)}
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
      </div>
    </div>
  );
};

export default IDE;
