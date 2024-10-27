import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdList, MdLeaderboard, MdPeople } from 'react-icons/md';

const Sidebar = () => {
    const location = useLocation();

    // Helper function to check if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className="w-64 bg-[#080e24] font-poppins text-white h-screen p-6 flex flex-col shadow-lg fixed">
            <img className='rounded-full h-[100px] w-[100px] mx-auto mb-20' src="https://i.postimg.cc/2yzNpf2r/coding-club.png" alt="AV" />
            <nav className="flex flex-col space-y-6">
                <SidebarLink
                    to="/admin/dashboard"
                    label="Dashboard"
                    icon={<MdDashboard />}
                    isActive={isActive('/admin/dashboard')}
                />
                <SidebarLink
                    to="/admin/all-problems"
                    label="All Problems"
                    icon={<MdList />}
                    isActive={isActive('/admin/all-problems')}
                />
                <SidebarLink
                    to="/admin/leaderboard"
                    label="Leaderboard"
                    icon={<MdLeaderboard />}
                    isActive={isActive('/admin/leaderboard')}
                />
                <SidebarLink
                    to="/admin/participants"
                    label="Participants"
                    icon={<MdPeople />}
                    isActive={isActive('/admin/participants')}
                />
            </nav>
        </div>
    );
};

// Helper component to render each sidebar link
const SidebarLink = ({ to, label, icon, isActive }) => {
    return (
        <Link
            to={to}
            className={`flex items-center px-4 py-3 rounded-md transition-colors 
                        ${isActive ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-700 hover:text-white'}`}
        >
            <span className="text-xl mr-3">{icon}</span>
            <span className="font-medium">{label}</span>
        </Link>
    );
};

export default Sidebar;
