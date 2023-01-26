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
} from "firebase/auth";
import { auth, app } from "../firebase/config";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);

  return context;
};

//PROVIDER DONDE VAN LAS FUNCIONES
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password, userName) => {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: userName,
      })
        .then(() => {
          console.log("Actualizado");
          window.location.reload();
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
      return user;
    }
  };

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
      }}
    >
      {children}
    </authContext.Provider>
  );
};
