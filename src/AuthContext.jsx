import { createContext, useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Loading from './assets/images/Loading.gif';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setPending(false)
        })
    }, [])

    if(pending){
        return <div className='flex justify-center items-center h-[100vh]'>
            <img src={Loading} alt="Loading image" />
        </div>
    }

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};