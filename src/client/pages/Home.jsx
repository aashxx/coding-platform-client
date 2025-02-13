import { TeamsContext } from '@/admin/contexts/TeamsContext';
import { realDb } from '@/lib/firebase';
import { ref, set } from 'firebase/database';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const { teams, setTeams } = useContext(TeamsContext);

  const [teamName, setTeamName] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setTeamName(event.target.value);
  };

  const generateUniqueString = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const handleSubmit = async () => {
    if (teamName.trim() === '') {
      toast.error("No team name");
      return;
    }

    const teamExists = teams.some((team) => team.teamName === teamName);

    if (teamExists) {
      toast.error("Team name already exists");
      return;
    }

    try {
      const teamID = generateUniqueString();
      const newTeamRef = ref(realDb, `allotments/${teamID}`);
      await set(newTeamRef, {
        balance: 1000,
        teamName
      });

      setTeams((prevTeams) => [
        ...prevTeams,
        { teamID, balance: 1000, teamName }
      ]);

      toast.success("Team added successfully");
      navigate(`editor/${teamID}`);

    } catch (error) {
      toast.error("Failed to add team");
      console.error("Error adding team", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col font-poppins">
      {/* Top Bar */}
      <div className="w-full bg-gray-800 py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-white">THE CODING AUCTION</h1>
        <aside className='flex items-center gap-7'>
          <img src={"https://i.postimg.cc/2yzNpf2r/coding-club.png"} alt="Club Logo" className="h-12 w-12 rounded-full" />
        </aside>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-1 p-6">
        <img className='-mt-20 mb-10' src="https://i.postimg.cc/zBrjN1b2/image-removebg-preview.png" alt="Welcome" />

        <div className="w-full max-w-md flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={teamName}
            onChange={handleInputChange}
            className="w-full p-3 text-lg text-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-indigo-600 text-lg font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;