import React, { createContext, useState, useEffect } from 'react';
import { realDb } from '@/lib/firebase';
import { ref, onValue } from 'firebase/database';

export const TeamsContext = createContext();

const TeamsState = ({ children }) => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const teamsRef = ref(realDb, 'allotments');

        const unsubscribe = onValue(teamsRef, (snapshot) => {
            const teamsData = [];
            snapshot.forEach((childSnapshot) => {
                teamsData.push({ teamId: childSnapshot.key, ...childSnapshot.val() });
            });
            setTeams(teamsData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <TeamsContext.Provider value={{ teams, setTeams }}>
            {children}
        </TeamsContext.Provider>
    );
};

export default TeamsState;
