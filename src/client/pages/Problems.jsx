import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProblemsContext } from '../contexts/ProblemsContext';
import { ref, update } from 'firebase/database';
import { realDb } from '@/lib/firebase';
import ProblemCard from '../components/ProblemCard';

const Problems = () => {
  const { team } = useParams(); 
  const { allotments, fetchBiddedQuestions } = useContext(ProblemsContext);

  useEffect(() => {
    if (team) {
      fetchBiddedQuestions(team);
    }
  }, [team]);

  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     if (document.hidden) {
  //       const teamRef = ref(realDb, `allotments/${team}`);
  //       update(teamRef, { disqualify: true })
  //         .then(() => console.log(`Team ${team} has been disqualified due to tab switch`))
  //         .catch((error) => console.error("Failed to disqualify team:", error));
  //     }
  //   };

  //   document.addEventListener('visibilitychange', handleVisibilityChange);
  //   return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  // }, [team]);

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
      {allotments.disqualify ? (
        // Display disqualification message if disqualify is true
        <div className="flex flex-col items-center py-10">
          <h2 className="text-3xl font-bold text-center text-red-500">
            {allotments.teamName} has been disqualified.
          </h2>
        </div>
      ) : (
        // Display bidded problems if not disqualified
        <div className="flex flex-col items-center py-10">
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-3xl font-bold text-center">
              Bidded Problems for Team {allotments.teamName || "Loading..."}
            </h2>
          </div>

          {/* Display each bidded problem */}
          {allotments.biddedProblems && allotments.biddedProblems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {allotments.biddedProblems.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} team={team} />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center mt-10">
              {allotments.biddedProblems ? "No bidded problems found for this team." : "Loading bidded problems..."}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Problems;