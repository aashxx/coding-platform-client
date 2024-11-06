import React, { createContext, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { realDb } from '@/lib/firebase';
import { ALL_PROBLEMS } from '@/lib/constants';

export const ProblemsContext = createContext();

const ProblemsState = ({ children }) => {

  const [allotments, setAllotments] = useState({
    teamName: "",
    balance: "",
    biddedProblems: [],
    disqualify: false
  });

  const fetchBiddedQuestions = (team) => {
    const teamRef = ref(realDb, `allotments/${team}`);
    
    onValue(teamRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const biddedQuestions = data.biddedQuestions || {};
        const balance = data.balance || "";

        const biddedProblems = Object.values(biddedQuestions).map(biddedItem => {
          const problemDetails = ALL_PROBLEMS.find(problem => problem.id === biddedItem.id);
          return {
            ...problemDetails,
            biddingPrice: biddedItem.biddingPrice,
            status: biddedItem.status
          };
        });

        setAllotments({
          teamName: data.teamName,
          balance,
          biddedProblems,
          disqualify: data.disqualify
        });
      } else {
        setAllotments({
          teamName: "",
          balance: "",
          biddedProblems: [],
          disqualify: false
        }); 
      }
    });
  };

  return (
    <ProblemsContext.Provider value={{ allotments, fetchBiddedQuestions }}>
      {children}
    </ProblemsContext.Provider>
  );
};

export default ProblemsState;
