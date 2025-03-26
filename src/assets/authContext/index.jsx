//src/context/AuthContext.js (or src/context/AuthProvider.js)
import React, {useContext, useEffect, useState} from "react";
import {GoogleAuthProvider, onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebase";

const AuthContext = React.createContext(undefined);

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
        return onAuthStateChanged(auth, initializeUser);
    }, []);

    async function initializeUser(user) {
        if (user) {

            setCurrentUser({ ...user });

            // check if provider is email and password login
            const isEmail = user.providerData.some(
                (provider) => provider.providerId === "password"
            );
            setIsEmailUser(isEmail);

          const isGoogle = user.providerData.some(
            (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID
          );
          setIsGoogleUser(isGoogle);

            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }

        setLoading(false);
    }

    const value = {
        userLoggedIn,
        isEmailUser,
        isGoogleUser,
        currentUser,
        setCurrentUser
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}