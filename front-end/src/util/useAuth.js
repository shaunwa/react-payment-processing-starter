import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

export const useAuth = () => {
    const [authInfo, setAuthInfo] = useState(() => {
        const user = firebase.auth().currentUser;
        const isLoading = !user;
        return { isLoading, user };
    });

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
              setAuthInfo({ isLoading: false, user });
        });

        return unsubscribe;
    }, []);

    return authInfo;
}