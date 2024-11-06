import React, { useState } from 'react';
import { ALL_PROBLEMS } from '@/lib/constants';
import AdminProblemCard from '../components/AdminProblemCard';
import { Link } from 'react-router-dom';

const AllProblems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter problems based on category and search term
  const filteredProblems = ALL_PROBLEMS.filter(problem => {
    const matchesCategory = selectedCategory === 'All' || problem.category === selectedCategory;
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100 font-poppins lg:pl-64 2xl:pl-[350px]">
      <aside className='flex items-center justify-between mb-8'>
        <h2 className="text-3xl font-semibold">All Problems</h2>
        <Link to={'/admin/add-problems'}>
          <button className="bg-indigo-600 text-gray-100 font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
            + New Problem
          </button>
        </Link>
      </aside>

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
          placeholder="Search problems..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="w-full md:w-full p-2 bg-gray-800 text-gray-100 border border-gray-700 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-400"
        />
      </div>

      {/* Display Problems as Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProblems.map(problem => (
          <AdminProblemCard key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
};

export default AllProblems;