import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdCategory, MdAccessTime, MdBarChart } from 'react-icons/md';
import { ref, update } from 'firebase/database';
import { realDb } from '@/lib/firebase';

const ProblemCard = ({ problem, team }) => {
  const defaultTimeLimit = problem.time_limit ? problem.time_limit * 60 : 0;
  const initialTime = localStorage.getItem(`timer-${problem.id}`) || defaultTimeLimit;
  const [timeLeft, setTimeLeft] = useState(parseInt(initialTime, 10) || defaultTimeLimit);

  useEffect(() => {
    if (problem.status === 'solved' || problem.status === 'time up') {
      localStorage.removeItem(`timer-${problem.id}`);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        localStorage.setItem(`timer-${problem.id}`, newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [problem.status, problem.id]);

  useEffect(() => {
    if (timeLeft <= 0) {
      update(ref(realDb, `allotments/${team}/biddedQuestions/${problem.id}`), {
        status: "time up",
      });
    }
  }, [timeLeft, problem.id, team]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getCategoryPath = () => {
    switch (problem.category) {
      case 'DSA & Problem Solving':
        return '/editor/:team/dsa';
      case 'Debugging':
        return '/editor/:team/debugging';
      case 'SQL':
        return '/editor/:team/sql';
      case 'Web Programming':
        return '/editor/:team/web';
      default:
        return `/editor/:team`;
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative flex flex-col justify-between min-h-[300px]">
      {/* Timer or Status Indicator */}
      {problem.status === 'unsolved' && timeLeft > 0 && (
        <div className="absolute -top-3 -right-3 bg-indigo-500 text-gray-100 font-semibold px-3 py-1 rounded-full text-xs">
          {formatTime(timeLeft)}
        </div>
      )}

      {/* Problem Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-100 mb-3">{problem.title}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-400 text-sm">
            <MdCategory className="text-indigo-500 mr-2" />
            <span><strong>Category:</strong> {problem.category}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <MdBarChart className="text-indigo-500 mr-2" />
            <span><strong>Difficulty:</strong> {problem.difficulty}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <MdAccessTime className="text-indigo-500 mr-2" />
            <span><strong>Time Limit:</strong> {problem.time_limit} minutes</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-4" />

      {/* Action Button */}
      <div>
        {problem.status === 'solved' ? (
          <button className="w-full bg-green-600 text-gray-100 font-semibold py-2 px-4 rounded cursor-not-allowed" disabled>
            Solved
          </button>
        ) : problem.status === 'time up' ? (
          <button className="w-full bg-red-600 text-gray-100 font-semibold py-2 px-4 rounded cursor-not-allowed" disabled>
            Time Up
          </button>
        ) : (
          <Link to={`${getCategoryPath().replace(':team', team)}/${problem.id}`} className="w-full block">
            <button className="w-full bg-indigo-600 text-gray-100 font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
              Solve
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProblemCard;