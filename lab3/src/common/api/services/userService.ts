import { GithubAuthProvider, GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
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

export const signOut = () => {
    return auth.signOut();
}

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        return unsubscribe;
    }, []);

    return { user };
}