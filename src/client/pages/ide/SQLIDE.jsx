import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { push, ref, set, update } from 'firebase/database';
import { runSQLProblem } from '@/lib/codeRunner';
import { ALL_PROBLEMS } from '@/lib/constants';
import { realDb } from '@/lib/firebase';

const mockDatabase = [
  { id: 1, name: 'Alice Johnson', department: 'Sales', salary: 60000, hire_date: '2015-06-20', job_title: 'Manager', manager_id: null, years_experience: 10 },
  { id: 2, name: 'Adam Smith', department: 'IT', salary: 50000, hire_date: '2018-03-15', job_title: 'Developer', manager_id: 1, years_experience: 5 },
  { id: 3, name: 'Charlie Brown', department: 'HR', salary: 55000, hire_date: '2012-11-03', job_title: 'Analyst', manager_id: 1, years_experience: 8 },
  { id: 4, name: 'Daisy Carter', department: 'Finance', salary: 75000, hire_date: '2010-09-17', job_title: 'Executive', manager_id: null, years_experience: 15 },
  { id: 5, name: 'Edward Davis', department: 'Marketing', salary: 62000, hire_date: '2017-12-11', job_title: 'Consultant', manager_id: 2, years_experience: 7 },
  { id: 6, name: 'Fiona Green', department: 'Sales', salary: 40000, hire_date: '2020-01-10', job_title: 'Analyst', manager_id: 1, years_experience: 3 },
  { id: 7, name: 'George Harris', department: 'IT', salary: 80000, hire_date: '2013-07-22', job_title: 'Developer', manager_id: null, years_experience: 12 },
  { id: 8, name: 'Hannah Lee', department: 'HR', salary: 45000, hire_date: '2019-05-23', job_title: 'Consultant', manager_id: 3, years_experience: 4 },
  { id: 9, name: 'Ivan Young', department: 'Finance', salary: 70000, hire_date: '2016-09-29', job_title: 'Manager', manager_id: 4, years_experience: 10 },
  { id: 10, name: 'Julia Thomas', department: 'Marketing', salary: 54000, hire_date: '2014-04-05', job_title: 'Executive', manager_id: 5, years_experience: 6 },
];

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
  const [loading, setLoading] = useState(false);
  const [showDBModal, setShowDBModal] = useState(false);

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
  // useEffect(() => {
  //   if (timeLeft === 0) {
  //     update(ref(realDb, `allotments/${team}/biddedQuestions/${problemId}`), {
  //       status: 'time up'
  //     });
  //     navigate(`/editor/${team}`);
  //   }
  // }, [timeLeft, navigate, problemId, team]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Run the SQL query to check if it passes all test cases
  const handleRun = async () => {
    setLoading(true);
    try {
      const results = await runSQLProblem(query, problem.testCases);
      if (results && results.success) {
        setTestCaseResults(results.testResults);
        const allPassed = results.testResults.every((result) => result.rowCountMatches && result.dataMatches);
        setTestCasesPassed(allPassed);
      } else {
        setTestCaseResults([{
          rowCountMatches: false,
          dataMatches: false,
          passed: false,
          actualRowCount: 0,
          actualData: [],
          error: results.error || "Query failed due to invalid syntax or database error."
        }]);
        setTestCasesPassed(false);
      }
    } catch (error) {
      setTestCaseResults([{
        rowCountMatches: false,
        dataMatches: false,
        passed: false,
        actualRowCount: 0,
        actualData: [],
        error: "Query failed due to a server error."
      }]);
      setTestCasesPassed(false);
    }
    setLoading(false);
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
    <div className="sql-ide-container bg-gray-900 min-h-screen text-gray-100 font-poppins flex">
      {/* Left Pane - Problem Details */}
      <div className="w-1/3 p-6 bg-gray-800 border-r border-gray-700 space-y-4">
        <h2 className="text-2xl font-bold mb-2">{problem.title}</h2>
        <p className="text-gray-300 mb-4">{problem.description}</p>
        <button
          className="bg-gray-700 text-gray-100 px-4 py-2 rounded mt-4 hover:bg-gray-600"
          onClick={() => setShowDBModal(true)}
        >
          View DB
        </button>
      </div>

      {/* Right Pane - SQL Editor and Test Case Results */}
      <div className="w-2/3 p-6 flex flex-col space-y-4">
        {/* Top Controls */}
        <div className="flex justify-between items-center">
          <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded">
            Language: SQL
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

        {/* SQL Query Editor */}
        <div className="flex-1 border border-gray-700 rounded-lg overflow-hidden" style={{ height: '50%' }}>
          <Editor
            height="100%"
            defaultLanguage="sql"
            language="sql"
            value={query}
            onChange={(value) => setQuery(value)}
            theme="vs-dark"
            options={{ fontSize: 16 }}
          />
        </div>

        {/* Test Case Results with Loader */}
        <div className="flex-1 border border-gray-700 rounded-lg p-4 space-y-4 overflow-auto">
          <h3 className="text-lg font-semibold">Test Case Results:</h3>
          {loading ? (
            <div className="text-center py-4">
              <span className="loader" /> {/* Loader */}
            </div>
          ) : (
            <div className="flex space-x-4 overflow-x-auto">
              {testCaseResults.map((result, idx) => (
                <button
                  key={idx}
                  disabled={idx !== 0} // Only allow Test Case 1 selection
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    idx === 0 ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-100 opacity-50'
                  }`}
                >
                  {result.passed ? `✅ Test Case ${idx + 1}` : `❌ Test Case ${idx + 1}`}
                </button>
              ))}
            </div>
          )}

          {!loading && testCaseResults[0] ? (
            <div className="flex-1 border border-gray-700 rounded-lg p-4 space-y-4 overflow-auto">
              <h4 className="font-semibold">Test Case Details:</h4>
              <div><strong>Expected Rows:</strong> {testCaseResults[0].expectedRowCount}</div>
              <div><strong>Actual Rows:</strong> {testCaseResults[0].actualRowCount}</div>
              <div><strong>Expected Data:</strong> {JSON.stringify(testCaseResults[0].expectedData)}</div>
              <div><strong>Actual Data:</strong> {JSON.stringify(testCaseResults[0].actualData)}</div>
              <div><strong>Passed:</strong> {testCaseResults[0].passed ? 'Yes' : 'No'}</div>
              {testCaseResults[0].error && (
                <div className="text-red-500"><strong>Error:</strong> {testCaseResults[0].error}</div>
              )}
            </div>
          ) : !loading && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg text-gray-300">
              Run the query to view test case results.
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
      {showDBModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-gray-900 p-4 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-100">SQL Database</h3>
        <button
          className="bg-red-600 text-gray-100 px-3 py-1 rounded hover:bg-red-700"
          onClick={() => setShowDBModal(false)}
        >
          Close
        </button>
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-auto max-h-[75vh]">
        <table className="min-w-full text-left text-gray-100 border border-gray-700">
          <thead className="sticky top-0 bg-gray-800">
            <tr>
              {Object.keys(mockDatabase[0]).map((header) => (
                <th key={header} className="border-b border-gray-700 p-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockDatabase.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-700">
                {Object.values(row).map((value, i) => (
                  <td key={i} className="p-2 whitespace-nowrap">{value || 'NULL'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default SQLIDE;