import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Dashboard from './admin/pages/Dashboard';
import AllProblems from './admin/pages/AllProblems';
import Leaderboard from './admin/pages/Leaderboard';
import Participants from './admin/pages/Participants';
import Sidebar from './admin/components/Sidebar';

const App = () => {
    return (
        <Router>
            <div className="flex min-h-screen">
                <AdminLayout>
                    <Routes>
                        <Route path="/admin" element={<Dashboard />} />
                        <Route path="/admin/all-problems" element={<AllProblems />} />
                        <Route path="/admin/leaderboard" element={<Leaderboard />} />
                        <Route path="/admin/participants" element={<Participants />} />
                    </Routes>
                </AdminLayout>
            </div>
        </Router>
    );
};

const AdminLayout = ({ children }) => {

    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <div className="flex w-full min-h-screen">
            {isAdminRoute && <Sidebar />}
            <div className={`flex-grow ${isAdminRoute ? 'p-6 bg-gray-50' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default App;
