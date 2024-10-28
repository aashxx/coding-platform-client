import React, { createContext, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { realDb } from '@/lib/firebase';
import { ALL_PROBLEMS } from '@/lib/constants';

export const ProblemsContext = createContext();

const ProblemsState = ({ children }) => {

  const [biddedProblems, setBiddedProblems] = useState([]);

  const fetchBiddedQuestions = (team) => {
    const teamRef = ref(realDb, `allotments/${team}/biddedQuestions`);
    
    onValue(teamRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const biddedTitles = Object.values(data).map(item => item.title);
        const problemsForTeam = ALL_PROBLEMS.filter(problem => biddedTitles.includes(problem.title));
        setBiddedProblems(problemsForTeam);
      } else {
        setBiddedProblems([]); 
      }
    });
  };

  return (
    <ProblemsContext.Provider value={{ biddedProblems, fetchBiddedQuestions }}>
      {children}
    </ProblemsContext.Provider>
  );
};

export default ProblemsState;
