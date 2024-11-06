import React, { useContext, useState } from 'react';
import { TeamsContext } from '../contexts/TeamsContext';

const Leaderboard = () => {
    const { teams } = useContext(TeamsContext);
    const [sortBy, setSortBy] = useState('highestPoints');

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}m ${remainingSeconds}s`;
    };

    const processData = () => {
        return teams.map((team) => {
            const biddedQuestions = team.biddedQuestions || {};
            const solvedQuestions = team.solved || {};

            const totalPoints = Object.values(solvedQuestions).reduce((acc, item) => acc + (item.points || 0), 0);
            const totalSolvingTime = Object.values(solvedQuestions).reduce((acc, item) => acc + (item.timeTaken || 0), 0);
            const problemsBidded = Object.keys(biddedQuestions).length;
            const problemsSolved = Object.keys(solvedQuestions).length;

            return {
                teamName: team.teamName,
                balance: team.balance,
                totalPoints,
                totalSolvingTime,
                problemsBidded,
                problemsSolved,
            };
        });
    };

    const sortData = () => {
        const sortedData = processData();
        switch (sortBy) {
            case 'highestPoints':
                sortedData.sort((a, b) => b.totalPoints - a.totalPoints);
                break;
            case 'highestBalance':
                sortedData.sort((a, b) => b.balance - a.balance);
                break;
            case 'minimumTime':
                sortedData.sort((a, b) => a.totalSolvingTime - b.totalSolvingTime);
                break;
            default:
                break;
        }
        return sortedData;
    };

    const sortedTeams = sortData();

    return (
        <div className="p-6 bg-gray-900 min-h-screen lg:pl-64 2xl:pl-[350px] font-poppins text-gray-100">
            <aside className='flex items-center justify-between w-full'>
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">Leaderboard</h2>

                {/* Sort Dropdown */}
                <div className="mb-6 flex items-center gap-4">
                    <label htmlFor="sort-by" className="block text-sm font-medium text-gray-300">Sort by</label>
                    <select
                        id="sort-by"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className=" p-2 bg-gray-800 text-gray-100 border border-gray-700 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-400"
                    >
                        <option value="highestPoints">Highest Points</option>
                        <option value="highestBalance">Highest Balance</option>
                        <option value="minimumTime">Minimum Solving Time</option>
                    </select>
                </div>
            </aside>

            {/* Leaderboard Table */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-700 text-gray-300 text-left text-sm">
                            <th className="px-6 py-3">Rank</th>
                            <th className="px-6 py-3">Team Name</th>
                            <th className="px-6 py-3">Balance</th>
                            <th className="px-6 py-3">Total Points</th>
                            <th className="px-6 py-3">Solving Time</th>
                            <th className="px-6 py-3">Problems Bidded</th>
                            <th className="px-6 py-3">Problems Solved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedTeams.map((team, index) => (
                            <tr key={team.teamName} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-300">{index + 1}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-100">{team.teamName}</td>
                                <td className="px-6 py-4 text-sm text-gray-300">{team.balance}</td>
                                <td className="px-6 py-4 text-sm text-gray-300">{team.totalPoints}</td>
                                <td className="px-6 py-4 text-sm text-gray-300">{formatTime(team.totalSolvingTime)}</td>
                                <td className="px-6 py-4 text-sm text-gray-300">{team.problemsBidded}</td>
                                <td className="px-6 py-4 text-sm text-gray-300">{team.problemsSolved}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;