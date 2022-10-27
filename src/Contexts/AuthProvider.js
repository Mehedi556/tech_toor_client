import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);

    const makingUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const signInUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password);
    }

    const githubLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const googleLogin = (provider) => {
        return signInWithPopup(auth , provider);
    }

    const logOut = () => {
        return signOut(auth);
    }



useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
        setUser(currentUser);
    });
    return () => {
        unsubscribe();
    }
} , [])

    const authInfo = {user , googleLogin , githubLogin , setUser , logOut , makingUser , signInUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;