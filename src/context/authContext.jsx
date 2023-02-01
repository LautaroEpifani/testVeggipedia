import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth, app } from "../firebase/config";
import { Navigate } from "react-router-dom";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);

  return context;
};

//PROVIDER DONDE VAN LAS FUNCIONES
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false)

  
 
    
  
  

  const signup = (email, password, userName) => {
    
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: userName,
        emailVerified: false,
      })
        .then(() => {
          sendEmailVerification(auth.currentUser)
           .then(() => {
               window.location.reload()
           })
          
          console.log("User Updated")
        })
        .catch((error) => {
          console.log(error);
        });
    });

  };

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => {
    signOut(auth);
  };

  const loginWithGoogle = () => {
    const gooogleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, gooogleProvider);
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  const stateUser = () => {
   
    if (user) {
      user.reload()
      return user;
    }
    
  };

  const checkVerified = () => {

    
    console.log(user.emailVerified)
    return user.emailVerified ? user.emailVerified : false
    
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //Este onAuth permite saber cual usuario está logeado
      //Si el usuario esta logeado devuelve el usuario y sino devuelve null
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  

  return (
   
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
        stateUser,
        checkVerified,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
