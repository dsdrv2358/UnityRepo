//src/context/AuthContext.js (or src/context/AuthProvider.js)
import React, {useContext, useEffect, useState} from "react";
import {GoogleAuthProvider, onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase/firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isEmailUser, setIsEmailUser] = useState(false);
    const [isGoogleUser, setIsGoogleUser] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsibscribe = onAuthStateChanged(auth, initializeUser);
        return unsibscribe;
    }, []);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({...user});
            setUserLoggedIn(true);

        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }

        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}