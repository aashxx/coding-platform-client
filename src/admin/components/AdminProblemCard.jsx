import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '@/lib/firebase'; // Adjust the import path as needed
import { doc, deleteDoc } from 'firebase/firestore';
import { MdEdit, MdDelete } from 'react-icons/md';
import { ALL_PROBLEMS } from '@/lib/constants';

const AdminProblemCard = ({ problem }) => {
  const navigate = useNavigate();

  // Edit function - navigates to edit page
  const handleEdit = () => {
    navigate(`/admin/problems/edit/${problem.id}`);
  };

  // Delete function - deletes document from Firestore
  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete the problem: ${problem.title}?`)) {
      try {
        // const problemDoc = doc(db, 'problems', problem.id);
        // await deleteDoc(problemDoc);
        ALL_PROBLEMS.filter(p => p.id !== problem.id);
        alert('Problem deleted successfully');
      } catch (error) {
        console.error('Error deleting problem:', error);
        alert('Failed to delete the problem. Please try again.');
      }
    }
  };

  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700 flex flex-col justify-between">
      <h3 className="text-xl font-semibold text-gray-100 mb-3">{problem.title}</h3>
      <p className="text-sm text-gray-400 mb-4">{problem.description}</p>
      <div className="text-sm text-gray-300 mb-4">
        <p><strong>Category:</strong> {problem.category}</p>
        <p><strong>Difficulty:</strong> {problem.difficulty}</p>
        <p><strong>Points:</strong> {problem.points}</p>
        <p><strong>Time Limit:</strong> {problem.time_limit} minutes</p>
      </div>
      <div className="flex justify-end gap-3 mt-auto">
        {/* <button 
          onClick={handleEdit} 
          className="text-blue-500 hover:text-blue-700 transition-colors"
          title="Edit Problem"
        >
          <MdEdit size={24} />
        </button> */}
        <button 
          onClick={handleDelete} 
          className="text-red-500 hover:text-red-700 transition-colors"
          title="Delete Problem"
        >
          <MdDelete size={24} />
        </button>
      </div>
    </div>
  );
};

export default AdminProblemCard;