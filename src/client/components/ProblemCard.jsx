import React, { useState, useEffect } from 'react';
import { MdCategory, MdAccessTime, MdBarChart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProblemCard = ({ problem, team }) => {
    
  const [timeLeft, setTimeLeft] = useState(problem.time_limit * 60); // Convert minutes to seconds

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [timeLeft]);

  // Format time in minutes and seconds
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow relative">
      
      {/* Timer Pill */}
      <div className="absolute -top-4 -right-4 bg-indigo-500 text-gray-100 font-semibold px-4 py-1 rounded-full text-sm">
        {formatTime(timeLeft)}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-100 mb-4">{problem.title}</h3>
      
      {/* Details */}
      <div className="space-y-3">
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
      
      {/* Divider */}
      <hr className="border-gray-700 my-4" />
    
      {/* Solve Button */}
      <Link to={`/editor/${team}/${problem.title}`}>
        <button className="mt-2 w-full bg-indigo-600 text-gray-100 font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
            Solve
        </button>
      </Link>
    </div>
  );
};

export default ProblemCard;
