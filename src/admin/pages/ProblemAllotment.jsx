import React, { useState } from 'react';
import { ALL_PROBLEMS } from '@/lib/constants';
import { ref, get, update, set } from 'firebase/database';
import { realDb } from '@/lib/firebase';
import { MdCategory, MdAccessTime, MdBarChart } from 'react-icons/md'

const ProblemAllotment = () => {

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
    
        const priceValue = parseFloat(price);
    
        try {
            const balanceRef = ref(realDb, `allotments/${selectedTeam}/balance`);
            const balanceSnapshot = await get(balanceRef);
            if (!balanceSnapshot.exists()) {
                alert("Balance data not found for the selected team.");
                return;
            }
    
            let currentBalance = balanceSnapshot.val();
    
            if (currentBalance < priceValue) {
                alert("Insufficient balance for this team.");
                return;
            }
    
            const newBalance = currentBalance - priceValue;
            if (newBalance < 0) {
                alert("Transaction would result in a negative balance. Operation stopped.");
                return;
            }
    
            await update(ref(realDb, `allotments/${selectedTeam}`), {
                balance: newBalance,
            });
    
            const problemRef = ref(realDb, `allotments/${selectedTeam}/biddedQuestions/${selectedProblem.id}`);
            await set(problemRef, {
                id: selectedProblem.id,
                biddingPrice: priceValue,
                status: "unsolved"
            });
    
            alert(`Problem allotted to ${selectedTeam}. Remaining balance: ${newBalance}`);
            closeModal();
    
        } catch (error) {
            console.error("Error allotting problem:", error);
            alert("Failed to allot problem.");
        }
    };
    

    return (
        <div className="p-6 bg-gray-900 min-h-screen lg:pl-64 2xl:pl-[350px] font-poppins text-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Allot Problems</h2>
            
            {/* Category Filter and Search Bar */}
            <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                {/* Category Filter */}
                <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)} 
                    className="w-full md:w-1/3 p-2 bg-gray-800 text-gray-100 border border-gray-700 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-400"
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
                    className="w-full md:w-full p-2 bg-gray-800 text-gray-100 border border-gray-700 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-400"
                />
            </div>

            {/* Display Problems as Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                {filteredProblems.map((problem, idx) => (
                    <div key={idx} className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-100 mb-4">{problem.title}</h3>
                        
                        {/* Details */}
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-400 text-sm">
                                <MdCategory className="text-indigo-500 mr-2" />
                                <span><strong>Category:</strong> {problem.category}</span>
                            </div>
                            <div className="flex items-center text-gray-400 text-sm">
                                <MdAccessTime className="text-indigo-500 mr-2" />
                                <span><strong>Time Limit:</strong> {problem.time_limit} minutes</span>
                            </div>
                            <div className="flex items-center text-gray-400 text-sm">
                                <MdBarChart className="text-indigo-500 mr-2" />
                                <span><strong>Difficulty:</strong> {problem.difficulty}</span>
                            </div>
                        </div>
                        
                        {/* Divider */}
                        <hr className="border-gray-700 my-4" />
                    
                        {/* Allot Button */}
                        <button 
                            className="mt-2 w-full bg-indigo-600 text-gray-100 font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
                            onClick={() => openModal(problem)}
                        >
                            Allot
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-xl font-semibold mb-4 text-gray-100">Allot Problem</h3>
                        
                        {/* Team Selector */}
                        <label className="block text-sm font-medium text-gray-300 mb-2">Select Team</label>
                        <select 
                            value={selectedTeam} 
                            onChange={(e) => setSelectedTeam(e.target.value)} 
                            className="w-full p-2 bg-gray-700 text-gray-100 border border-gray-600 rounded mb-4"
                        >
                            <option value="">Select a team</option>
                            <option value="H4_n7Zb2">Microsoft</option>
                            <option value="K6m_8B7q">Google</option>
                            <option value="L7z_9Xq3">Apple</option>
                            <option value="P9k_2Z8j">Amazon</option>
                            <option value="Q9_L5y7n">Meta</option>
                            <option value="R1y_4P8q">OpenAI</option>
                            <option value="T5x_J9m2">Oracle</option>
                            <option value="Z4_xj7N8">Intel</option>
                            <option value="j2_N4xq5">Nvidia</option>
                            <option value="m8_B6z9X">Netflix</option>
                            <option value="q2_K8z9N">Atlassian</option>
                            <option value="x5_L9n7z">Adobe</option>
                        </select>

                        {/* Price Input */}
                        <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Enter price"
                            className="w-full p-2 bg-gray-700 text-gray-100 border border-gray-600 rounded mb-4"
                        />

                        {/* Submit Button */}
                        <button 
                            onClick={handleSubmit}
                            className="w-full bg-indigo-600 text-gray-100 font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
                        >
                            Submit
                        </button>

                        {/* Close Button */}
                        <button 
                            onClick={closeModal}
                            className="w-full mt-2 bg-gray-600 text-gray-100 font-semibold py-2 px-4 rounded hover:bg-gray-500 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProblemAllotment;
