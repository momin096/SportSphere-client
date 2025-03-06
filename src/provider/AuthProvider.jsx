import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile , signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from "../firebase/firebase.init";
import { IoReturnUpBackOutline } from "react-icons/io5";
const provider = new GoogleAuthProvider();


export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updatedInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedInfo)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        createUserWithEmail,
        signInWithEmail,
        updateUserProfile,
        user,
        setUser,
        loading,
        setLoading,
        logOut,
        signInWithGoogle,


    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    },[user])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;