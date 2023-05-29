import { GithubAuthProvider, GoogleAuthProvider, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "../config";
import { useEffect, useState } from "react";



const googleProfiver = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProfiver);
}

export const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
}

export const signInWithEmail = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const registerWithEmail = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const signOut = () => {
    return auth.signOut();
}

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(auth.currentUser);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        return unsubscribe;
    }, []);

    const updateDisplayName = (displayName: string) => {
        if (!auth.currentUser) {
            return Promise.reject();
        }

        return updateProfile(auth.currentUser, { displayName })
            .then(() => setUser({...auth.currentUser!, displayName: displayName}));
    }

    return { user, updateDisplayName };
}