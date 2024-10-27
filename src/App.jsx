import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './admin/pages/Dashboard';
import Leaderboard from './admin/pages/Leaderboard';
import Participants from './admin/pages/Participants';
import Sidebar from './admin/components/Sidebar';
import ProblemAllotment from './admin/pages/ProblemAllotment';
import Problems from './client/pages/Problems';

const App = () => {
    return (
        <Router>
            <div className="flex min-h-screen">
                <AdminLayout>
                    <Routes>
                        <Route path="/admin/dashboard" element={<Dashboard />} />
                        <Route path="/admin/allot-problems" element={<ProblemAllotment />} />
                        <Route path="/admin/leaderboard" element={<Leaderboard />} />
                        <Route path="/admin/participants" element={<Participants />} />
                        <Route path='/editor/:team' element={<Problems />} />
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
            <div className={`flex-grow ${isAdminRoute ? 'p-6 bg-gray-900' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default App;
