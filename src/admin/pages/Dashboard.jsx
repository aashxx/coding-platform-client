import React, { useContext, useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { MdAssignment, MdAccessTime, MdClear, MdStar, MdAccountBalance } from 'react-icons/md';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { TeamsContext } from '../contexts/TeamsContext';
import { ALL_PROBLEMS } from '@/lib/constants';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const { teams } = useContext(TeamsContext);
  const [dashboardData, setDashboardData] = useState({
    totalProblems: 0,
    totalAllotted: 0,
    totalNotSolved: 0,
    topper: { name: '', points: 0 },
    highestBalanceTeam: { name: '', balance: 0 },
    fastestTeam: { name: '', time: '' },
    totalTeams: 0,
    problemsStatusData: null,
    leaderboardData: null,
    teamBalancesData: null,
  });

  useEffect(() => {
    if (teams.length > 0) {
      let totalProblems = ALL_PROBLEMS.length;
      let totalAllotted = 0;
      let totalNotSolved = 0;
      let topper = { name: '', points: 0 };
      let highestBalanceTeam = { name: '', balance: 0 };
      let fastestTeam = { name: '', time: Number.MAX_SAFE_INTEGER };
      const leaderboardPoints = [];
      const teamBalances = [];
      const teamNames = [];
      const problemStatuses = { allotted: 0, solved: 0, notSolved: 0 };

      teams.forEach((team) => {
        const biddedQuestions = team.biddedQuestions || {};
        const solvedQuestions = team.solved || {};

        const totalPoints = Object.values(solvedQuestions).reduce((acc, item) => acc + (item.points || 0), 0);
        const totalSolvingTime = Object.values(solvedQuestions).reduce((acc, item) => acc + (item.timeTaken || 0), 0);
        const problemsBidded = Object.keys(biddedQuestions).length;
        const problemsSolved = Object.keys(solvedQuestions).length;

        totalAllotted += problemsBidded;
        totalNotSolved += problemsBidded - problemsSolved;

        // Update topper
        if (totalPoints > topper.points) {
          topper = { name: team.teamName, points: totalPoints };
        }

        // Update highest balance team
        if (team.balance > highestBalanceTeam.balance) {
          highestBalanceTeam = { name: team.teamName, balance: team.balance };
        }

        // Update fastest team
        if (problemsSolved > 0 && totalSolvingTime < fastestTeam.time) {
          fastestTeam = { name: team.teamName, time: totalSolvingTime };
        }

        // Populate data for charts
        teamNames.push(team.teamName);
        leaderboardPoints.push(totalPoints);
        teamBalances.push(team.balance);

        // Problems status data
        problemStatuses.allotted += problemsBidded;
        problemStatuses.solved += problemsSolved;
        problemStatuses.notSolved += problemsBidded - problemsSolved;
      });

      // Prepare data for charts
      const problemsStatusData = {
        labels: ['Allotted', 'Solved', 'Not Solved'],
        datasets: [
          {
            label: 'Problems Status',
            data: [problemStatuses.allotted, problemStatuses.solved, problemStatuses.notSolved],
            backgroundColor: ['#f59e0b', '#10b981', '#ef4444'],
          },
        ],
      };

      const leaderboardData = {
        labels: teamNames,
        datasets: [
          {
            label: 'Leaderboard Points',
            data: leaderboardPoints,
            backgroundColor: ['#6366f1', '#ec4899', '#10b981', '#f59e0b'],
          },
        ],
      };

      const teamBalancesData = {
        labels: teamNames,
        datasets: [
          {
            label: 'Team Balances',
            data: teamBalances,
            backgroundColor: ['#6366f1', '#ec4899', '#10b981', '#f59e0b'],
          },
        ],
      };

      setDashboardData({
        totalProblems,
        totalAllotted,
        totalNotSolved,
        topper,
        highestBalanceTeam,
        fastestTeam: { name: fastestTeam.name, time: formatTime(fastestTeam.time) },
        totalTeams: teams.length,
        problemsStatusData,
        leaderboardData,
        teamBalancesData,
      });
    }
  }, [teams]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100 font-poppins lg:pl-64">
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Dashboard</h2>
      
      {/* Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <MetricCard icon={<MdAssignment className="text-indigo-500 text-4xl" />} label="Total Problems" value={dashboardData.totalProblems} />
        <MetricCard icon={<MdAssignment className="text-yellow-500 text-4xl" />} label="Total Allotted" value={dashboardData.totalAllotted} />
        <MetricCard icon={<MdClear className="text-red-500 text-4xl" />} label="Not Solved" value={dashboardData.totalNotSolved} />
        <MetricCard icon={<MdStar className="text-blue-500 text-4xl" />} label="Topper" value={`${dashboardData.topper.name} - ${dashboardData.topper.points} pts`} />
        <MetricCard icon={<MdAccountBalance className="text-purple-500 text-4xl" />} label="Highest Balance" value={`${dashboardData.highestBalanceTeam.name} - $${dashboardData.highestBalanceTeam.balance}`} />
        <MetricCard icon={<MdAccessTime className="text-green-500 text-4xl" />} label="Fastest Team" value={`${dashboardData.fastestTeam.name} - ${dashboardData.fastestTeam.time}`} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Problems Status Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Problems Status</h3>
          {dashboardData.problemsStatusData && <Doughnut data={dashboardData.problemsStatusData} />}
        </div>

        {/* Leaderboard Points Distribution */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Leaderboard Points</h3>
          {dashboardData.leaderboardData && <Bar data={dashboardData.leaderboardData} />}
        </div>

        {/* Team Balances Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Team Balances</h3>
          {dashboardData.teamBalancesData && <Pie data={dashboardData.teamBalancesData} />}
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