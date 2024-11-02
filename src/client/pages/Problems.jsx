import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProblemsContext } from '../contexts/ProblemsContext';
import ProblemCard from '../components/ProblemCard';

const Problems = () => {
  const { team } = useParams(); // Get the team parameter from URL
  const { allotments, fetchBiddedQuestions } = useContext(ProblemsContext);

  // Fetch bidded questions when the component mounts or team changes
  useEffect(() => {
    if (team) {
      fetchBiddedQuestions(team);
    }
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 font-poppins">
      {/* Top Bar */}
      <div className="w-full bg-gray-800 py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-white">THE CODING AUCTION</h1>
        <aside className='flex items-center gap-7'>
          {allotments.balance !== undefined && (
              <span className="bg-indigo-600 text-gray-100 px-4 py-1 rounded-full font-semibold">
                Balance: ${allotments.balance}
              </span>
            )}
          <img src={"https://i.postimg.cc/2yzNpf2r/coding-club.png"} alt="Club Logo" className="h-12 w-12 rounded-full" />
        </aside>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center py-10">
        <div className="flex items-center space-x-4 mb-8">
          <h2 className="text-3xl font-bold text-center">Bidded Problems for Team {allotments.teamName || "Loading..."}</h2>
        </div>

        {/* Display each bidded problem */}
        {allotments.biddedProblems && allotments.biddedProblems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {allotments.biddedProblems.map((problem, idx) => (
              <ProblemCard key={idx} problem={problem} team={team} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-10">
            {allotments.biddedProblems ? "No bidded problems found for this team." : "Loading bidded problems..."}
          </p>
        )}
      </div>
    </div>
  );
};

export default Problems;