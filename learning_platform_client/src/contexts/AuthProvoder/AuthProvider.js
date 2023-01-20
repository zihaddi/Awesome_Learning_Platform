import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
export const auth = getAuth(app);



const AuthProvider = ({children}) => {

  const [user , setUser] = useState(null)
  const [loading , setLoading] = useState(true)
  //login centralized function -> rest part in RightSideNav
  const loadLogin = (provider)=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  
  //logout Functionality
  const loadLogout = () =>{
    setLoading(true)
    return signOut(auth)
  }

  //load Email/Pass register
  const loadUserRegister = (email , password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

   //load Email/Pass login
   const loadUserLogin = (email , password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //load UserInfo after Login
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser)
      setLoading(false)
    } )
    return ()=> {unsubscribe()}
  },[])

  //update user profile
  const loadUpdateProfile = (profile)=>{
       return updateProfile(auth.currentUser,profile)
  }

  //loadGithubLogin
  const loadGithubLogin = (provider) =>
  {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const AuthInfo = {user , loadLogin , loadLogout , loadUserRegister , loadUserLogin , loading , loadGithubLogin , loadUpdateProfile}
  return (
    <AuthContext.Provider value={AuthInfo}>
       
            {children}
       
    </AuthContext.Provider>
  );
};

export default AuthProvider;