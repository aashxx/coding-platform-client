import React, { useContext } from 'react';
import { TeamsContext } from '../contexts/TeamsContext';
import { ref, update } from 'firebase/database';
import { realDb } from '@/lib/firebase';

const Participants = () => {
  const { teams } = useContext(TeamsContext);

  const toggleDisqualifyStatus = async (teamId, isDisqualified) => {
    try {
      const confirmation = confirm(`Are you sure to disqualify this team?`);
      if(!confirmation) return;
      const teamRef = ref(realDb, `allotments/${teamId}`);
      await update(teamRef, { disqualify: !isDisqualified });
    } catch (error) {
      console.error("Failed to update disqualification status:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen lg:pl-64 2xl:pl-[350px] font-poppins text-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Participants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team.teamId} className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-5 flex flex-col items-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-100 mb-4">{team.teamName}</h3>
            <p className="text-gray-400 mb-4">Balance: ${team.balance}</p>

            <button
              onClick={() => toggleDisqualifyStatus(team.teamId, team.disqualify)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                team.disqualify ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              {team.disqualify ? 'Qualify' : 'Disqualify'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Participants;