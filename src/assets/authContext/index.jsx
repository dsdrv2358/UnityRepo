import React, {useContext, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebase/firebase.jsx";
const AuthContext = React.createContext(undefined);

export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider({children}){
     // Use helper function
    const [currentUser, setCurrentUser] =useState(null);
    const [userLoggedIn, setUserLoggedIn] =useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,initializedUser);
        return unsubscribe
    }, [])

    async function initializedUser(user){
        if(user){
            setCurrentUser({...user});
            setUserLoggedIn(true);
        }
        else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false)
    }
    const value = {
        currentUser,
        userLoggedIn,
        loading
    }
    return(<AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>)

}