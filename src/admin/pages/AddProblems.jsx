import { ALL_PROBLEMS } from '@/lib/constants';
import { db } from '@/lib/firebase';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProblems = () => {
  const [problemData, setProblemData] = useState({
    id: 'Ugy893jbIUGDOI399adioiqo903',
    category: '',
    language: '',
    time_limit: 0,
    points: 0,
    difficulty: '',
    base_price: 0,
    title: '',
    description: '',
    buggedCode: '',
    solutionCode: '',
    testCases: [],
    existingCode: {
      python: '',
      cpp: '',
      java: '',
      javascript: '',
      c: '',
    },
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProblemData((prev) => ({ ...prev, [name]: value }));
  };

  const handleExistingCodeChange = (language, value) => {
    setProblemData((prev) => ({
      ...prev,
      existingCode: {
        ...prev.existingCode,
        [language]: value,
      },
    }));
  };

  const handleTestCaseChange = (index, field, value) => {
    const newTestCases = [...problemData.testCases];
    newTestCases[index] = { ...newTestCases[index], [field]: value };
    setProblemData((prev) => ({ ...prev, testCases: newTestCases }));
  };

  const handleAddTestCase = () => {
    setProblemData((prev) => ({
      ...prev,
      testCases: [...prev.testCases, { input: '', expectedOutput: '' }],
    }));
  };

  const handleRemoveTestCase = (index) => {
    const newTestCases = problemData.testCases.filter((_, i) => i !== index);
    setProblemData((prev) => ({ ...prev, testCases: newTestCases }));
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setProblemData((prev) => ({
      ...prev,
      category: selectedCategory,
      buggedCode: '',
      solutionCode: '',
      existingCode: {
        python: '',
        cpp: '',
        java: '',
        javascript: '',
        c: '',
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      const problemsCollection = collection(db, 'problems');
      ALL_PROBLEMS.push(problemData);
      await addDoc(problemsCollection, problemData);
      toast.success("Problem added successfully");
      navigate('/admin/all-problems');
    } catch (error) {
      console.error("Error submitting problem data:", error);
      toast.error("Failed to add problem");
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100 font-poppins lg:pl-64 2xl:pl-[350px]">
      <h2 className="text-3xl font-semibold mb-8">Add New Problem</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-6 col-span-2">
          <h3 className="text-xl font-semibold text-gray-300 mb-4">Problem Details</h3>
          <div className="space-y-4">
            <label className="block text-gray-400">Title</label>
            <input
              type="text"
              name="title"
              value={problemData.title}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              placeholder="Enter problem title"
            />

            <label className="block text-gray-400">Category</label>
            <select
              name="category"
              value={problemData.category}
              onChange={handleCategoryChange}
              className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="Debugging">Debugging</option>
              <option value="DSA & Problem Solving">DSA & Problem Solving</option>
              <option value="SQL">SQL</option>
              <option value="Web Programming">Web Programming</option>
            </select>

            <label className="block text-gray-400">Difficulty</label>
            <select
              name="difficulty"
              value={problemData.difficulty}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            >
              <option value="">Select Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            <label className="block text-gray-400">Points</label>
            <input
              type="number"
              name="points"
              value={problemData.points}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              placeholder="Enter points"
            />

            <label className="block text-gray-400">Base Price</label>
            <input
              type="number"
              name="base_price"
              value={problemData.base_price}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              placeholder="Enter base price"
            />

            <label className="block text-gray-400">Time Limit (in minutes)</label>
            <input
              type="number"
              name="time_limit"
              value={problemData.time_limit}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              placeholder="Enter time limit"
            />

            <label className="block text-gray-400">Description</label>
            <textarea
              name="description"
              value={problemData.description}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              rows="4"
              placeholder="Enter problem description"
            />
          </div>
        </div>

        {/* Dynamic Code Fields Based on Category */}
        <div className="space-y-6 col-span-2 lg:col-span-1">
          {problemData.category === 'Debugging' && (
            <>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Code Details</h3>
              <label className="block text-gray-400">Bugged Code</label>
              <textarea
                name="buggedCode"
                value={problemData.buggedCode}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                rows="4"
                placeholder="Enter bugged code"
              />

              <label className="block text-gray-400">Solution Code</label>
              <textarea
                name="solutionCode"
                value={problemData.solutionCode}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                rows="4"
                placeholder="Enter solution code"
              />
            </>
          )}

          {problemData.category === 'DSA & Problem Solving' && (
            <>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Existing Code (in Multiple Languages)</h3>
              {['python', 'cpp', 'java', 'javascript', 'c'].map((lang) => (
                <div key={lang}>
                  <label className="block text-gray-400 capitalize">{lang} Code</label>
                  <textarea
                    value={problemData.existingCode[lang]}
                    onChange={(e) => handleExistingCodeChange(lang, e.target.value)}
                    className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                    rows="4"
                    placeholder={`Enter ${lang} code`}
                  />
                </div>
              ))}
            </>
          )}
        </div>

        {/* Test Cases */}
        <div className="space-y-6 col-span-2">
          <h3 className="text-xl font-semibold text-gray-300 mb-4">Test Cases</h3>
          {problemData.testCases.map((testCase, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700 space-y-4 relative">
              <label className="block text-gray-400">Input</label>
              <input
                type="text"
                value={testCase.input}
                onChange={(e) => handleTestCaseChange(index, 'input', e.target.value)}
                className="w-full p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                placeholder="Enter test case input"
              />

              <label className="block text-gray-400">Expected Output</label>
              <input
                type="text"
                value={testCase.expectedOutput}
                onChange={(e) => handleTestCaseChange(index, 'expectedOutput', e.target.value)}
                className="w-full p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                placeholder="Enter expected output"
              />

              <button
                onClick={() => handleRemoveTestCase(index)}
                className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={handleAddTestCase}
            className="w-full bg-indigo-600 text-gray-100 font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors mt-2"
          >
            + Add Test Case
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-gray-100 font-semibold py-3 px-4 rounded hover:bg-green-700 transition-colors"
        >
          Save Problem
        </button>
      </div>
    </div>
  );
};

export default AddProblems;