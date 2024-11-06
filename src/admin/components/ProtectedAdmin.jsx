import React, { useEffect, useState } from "react";

const ProtectedAdmin = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [password, setPassword] = useState('');

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
        setIsAuthenticated(isAuthenticated);
    }, []);

    const handlePasswordSubmit = () => {
        const correctPassword = 'abc123'; 

        if (password === correctPassword) {
            setIsAuthenticated(true);
            localStorage.setItem('adminAuthenticated', 'true'); 
            setShowPasswordModal(false);
        } else {
            alert("Incorrect password, please try again.");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="fixed font-poppins inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-gray-100">
                    <h3 className="text-lg font-semibold mb-4 text-gray-100">Admin Access Required</h3>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Admin Password"
                        className="w-full p-2 mb-4 bg-gray-700 text-gray-100 border border-gray-600 rounded"
                    />
                    <button
                        onClick={handlePasswordSubmit}
                        className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </div>
        );
    }

    return children;
};

export default ProtectedAdmin;