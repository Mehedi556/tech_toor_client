import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);

    const [loading , setLoading] = useState(true);

    const makingUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const signInUser = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    const githubLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth , provider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);

    }



useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    });
    return () => {
        unsubscribe();
    }
} , [])

    const authInfo = {user , googleLogin , loading , githubLogin , setUser , logOut , makingUser , signInUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;