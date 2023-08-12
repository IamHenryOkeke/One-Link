import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const useUserStatus = () => {
    const [userStatus, setUserStatus] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setUserStatus(user);
            } else {
                // User is signed out
                setUserStatus(null);
            }
        })
    }, [])
    return userStatus;
}

export default useUserStatus
