import React from 'react';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { MdAssignment, MdAccessTime, MdClear, MdStar, MdAccountBalance, MdGroups } from 'react-icons/md';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  // Placeholder data
  const totalProblems = 200;
  const totalAllotted = 150;
  const totalNotSolved = 30;
  const topper = { name: 'Team Alpha', points: 2500 };
  const highestBalanceTeam = { name: 'Team Omega', balance: 1200 };
  const fastestTeam = { name: 'Team Beta', time: '3h 25m' }; // New metric for fastest team
  const totalTeams = 12;

  // Chart Data
  const problemsStatusData = {
    labels: ['Allotted', 'Solved', 'Not Solved'],
    datasets: [
      {
        label: 'Problems Status',
        data: [totalAllotted, totalProblems - totalNotSolved, totalNotSolved],
        backgroundColor: ['#f59e0b', '#10b981', '#ef4444'],
      },
    ],
  };

  const leaderboardData = {
    labels: ['Team Alpha', 'Team Beta', 'Team Gamma', 'Team Delta'],
    datasets: [
      {
        label: 'Leaderboard Points',
        data: [2500, 2200, 2100, 1800],
        backgroundColor: ['#6366f1', '#ec4899', '#10b981', '#f59e0b'],
      },
    ],
  };

  const teamBalancesData = {
    labels: ['Team Alpha', 'Team Beta', 'Team Gamma', 'Team Delta'],
    datasets: [
      {
        label: 'Team Balances',
        data: [1200, 1100, 950, 875],
        backgroundColor: ['#6366f1', '#ec4899', '#10b981', '#f59e0b'],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100 font-poppins lg:pl-64 2xl:pl-[350px]">
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Dashboard</h2>
      
      {/* Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <MetricCard icon={<MdAssignment className="text-indigo-500 text-4xl" />} label="Total Problems" value={totalProblems} />
        <MetricCard icon={<MdAssignment className="text-yellow-500 text-4xl" />} label="Total Allotted" value={totalAllotted} />
        <MetricCard icon={<MdClear className="text-red-500 text-4xl" />} label="Not Solved" value={totalNotSolved} />
        <MetricCard icon={<MdStar className="text-blue-500 text-4xl" />} label="Topper" value={`${topper.name} - ${topper.points} pts`} />
        <MetricCard icon={<MdAccountBalance className="text-purple-500 text-4xl" />} label="Highest Balance" value={`${highestBalanceTeam.name} - $${highestBalanceTeam.balance}`} />
        <MetricCard icon={<MdAccessTime className="text-green-500 text-4xl" />} label="Fastest Team" value={`${fastestTeam.name} - ${fastestTeam.time}`} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Problems Status Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Problems Status</h3>
          <Doughnut data={problemsStatusData} />
        </div>

        {/* Leaderboard Points Distribution */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Leaderboard Points</h3>
          <Bar data={leaderboardData} />
        </div>

        {/* Team Balances Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Team Balances</h3>
          <Pie data={teamBalancesData} />
        </div>
      </div>
    </div>
  );
};

// MetricCard Component
const MetricCard = ({ icon, label, value }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-5 flex items-center space-x-4 hover:shadow-xl transition-shadow">
      <div>{icon}</div>
      <div>
        <p className="text-lg font-semibold text-gray-300">{label}</p>
        <p className="text-2xl font-bold text-gray-100">{value}</p>
      </div>
    </div>
  );
};

export default Dashboard;
