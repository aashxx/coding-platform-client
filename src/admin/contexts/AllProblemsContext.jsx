import React, { createContext, useState, useEffect } from 'react';
import { db } from '@/lib/firebase'; 
import { collection, onSnapshot } from 'firebase/firestore';

export const AllProblemsContext = createContext();

const AllProblemsState = ({ children }) => {

  const [allProblems, setAllProblems] = useState([]);

  useEffect(() => {
    const problemsCollection = collection(db, 'problems');

    const unsubscribe = onSnapshot(problemsCollection, (snapshot) => {
      const problemsData = snapshot.docs.map(doc => ({
        docId: doc.id,
        ...doc.data()
      }));
      console.log(problemsData)
      setAllProblems(problemsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AllProblemsContext.Provider value={{ allProblems }}>
      {children}
    </AllProblemsContext.Provider>
  );
};

export default AllProblemsState;
