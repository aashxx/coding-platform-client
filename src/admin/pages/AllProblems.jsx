import React, { useState } from 'react';
import { ALL_PROBLEMS } from '@/lib/constants';
import { push, ref, get, update } from 'firebase/database';
import { realDb } from '@/lib/firebase'; 

const AllProblems = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProblem, setSelectedProblem] = useState(null);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [price, setPrice] = useState('');

    const filteredProblems = ALL_PROBLEMS.filter(problem => {
        const matchesCategory = selectedCategory === 'All' || problem.category === selectedCategory;
        const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Open modal and set selected problem
    const openModal = (problem) => {
        setSelectedProblem(problem);
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTeam('');
        setPrice('');
    };

    const handleSubmit = async () => {
        if (!selectedTeam || !price) {
            alert("Please select a team and enter a price.");
            return;
        }

        const priceValue = parseFloat(price); // Convert price to a number for calculations

        try {
            // Reference to the team's balance in Firebase
            const balanceRef = ref(realDb, `allotments/${selectedTeam}/balance`);

            // Get the current balance for the selected team
            const balanceSnapshot = await get(balanceRef);
            if (!balanceSnapshot.exists()) {
                alert("Balance data not found for the selected team.");
                return;
            }

            let currentBalance = balanceSnapshot.val();

            // Check if the team has enough balance
            if (currentBalance < priceValue) {
                alert("Insufficient balance for this transaction.");
                return;
            }

            // Subtract the bidding price from the current balance
            const newBalance = currentBalance - priceValue;

            // Update the balance in Firebase and push the bidded question
            await update(ref(realDb, `allotments/${selectedTeam}`), {
                balance: newBalance,
            });

            // Add the problem to biddedQuestions for the selected team
            const allotmentRef = ref(realDb, `allotments/${selectedTeam}/biddedQuestions`);
            await push(allotmentRef, {
                title: selectedProblem.title,
                biddingPrice: priceValue,
            });

            alert(`Problem allotted to ${selectedTeam}. Remaining balance: ${newBalance}`);
            closeModal();

        } catch (error) {
            console.error("Error allotting problem:", error);
            alert("Failed to allot problem.");
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen pl-64 font-poppins">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">All Problems</h2>
            
            {/* Category Filter and Search Bar */}
            <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                {/* Category Filter */}
                <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)} 
                    className="w-full md:w-1/3 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                >
                    <option value="All">All Categories</option>
                    <option value="Debugging">Debugging</option>
                    <option value="DSA & Problem Solving">DSA & Problem Solving</option>
                    <option value="Web Programming">Web Programming</option>
                    <option value="SQL">SQL</option>
                </select>

                {/* Search Bar */}
                <input 
                    type="text" 
                    placeholder="Search questions..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="w-full md:w-1/2 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>

            {/* Display Problems as Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProblems.map(problem => (
                    <div key={problem.id} className="bg-white border border-gray-200 rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-800">{problem.title}</h3>
                        <p className="text-sm text-gray-600"><strong>Category:</strong> {problem.category}</p>
                        <p className="text-sm text-gray-600"><strong>Time Limit:</strong> {problem.time_limit} min</p>
                        <p className="text-sm text-gray-600"><strong>Difficulty:</strong> {problem.difficulty}</p>
                        <button 
                            className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                            onClick={() => openModal(problem)}
                        >
                            Allot
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-xl font-semibold mb-4">Allot Problem</h3>
                        
                        {/* Team Selector */}
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Team</label>
                        <select 
                            value={selectedTeam} 
                            onChange={(e) => setSelectedTeam(e.target.value)} 
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        >
                            <option value="">Select a team</option>
                            {Array.from({ length: 12 }, (_, i) => (
                                <option key={i + 1} value={`team${i + 1}`}>
                                    Team {i + 1}
                                </option>
                            ))}
                        </select>

                        {/* Price Input */}
                        <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Enter price"
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />

                        {/* Submit Button */}
                        <button 
                            onClick={handleSubmit}
                            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                        >
                            Submit
                        </button>

                        {/* Close Button */}
                        <button 
                            onClick={closeModal}
                            className="w-full mt-2 bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllProblems;
