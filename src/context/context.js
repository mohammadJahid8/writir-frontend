/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import axios from "axios";
import app from "../firebase/firebase.init";
import api from "../api/axios";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const UserContext = createContext();

// api.defaults.baseURL = "https://rantir-backend.vercel.app/api/v1";
// api.defaults.baseURL = "http://localhost:5000/api/v1";

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [userRefetch, setUserRefetch] = useState(false);
  const [usersRefetch, setusersRefetch] = useState(false);

  const [folders, setFolders] = useState([])
  const [loadingFolders, setLoadingFolders] = useState(false);

  const logInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const token = localStorage.getItem("rantirToken");
  useEffect(() => {
    const getProfile = async () => {
      setIsLoading(true);

      try {
        const promise = await api.get(`/user/profile`, {
          headers: {
            authorization: `${token}`,
          },
        });

        setUser(promise.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        if (error.response.data.message === "Invalid Token!") {
          localStorage.removeItem("rantirToken");
        }
      }
    };

    getProfile();
  }, [token, userRefetch]);




  const handleGoogleSignIn = async () => {
    setLoading(true);
    let res;
    try {
      res = await logInWithGoogle();
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }

    // console.log({ res });

    if (res._tokenResponse.email) {
      const payload = {
        name: res._tokenResponse.fullName,
        email: res._tokenResponse.email,
        image: res._tokenResponse.photoUrl,
        role: "user",
      };

      try {
        const promise = await api.post(`/user/create-google-user`, payload);
        if (promise.status === 200) {
          localStorage.setItem("rantirToken", promise.data.data);
          setUserRefetch(!userRefetch);
          setTimeout(() => {
            alert("Logged In")
            window.location.href = "/";
            setLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        alert(error.response.data.message || `Log in failed`)

      }
    }
  };



  const handleGetFolders = async () => {
    setLoadingFolders(true);
    try {
      const res = await api.get(`/folder/${user?._id}`);
      setFolders(res.data.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingFolders(false);
    }
  };

  useEffect(() => {
    handleGetFolders();
  }, [user?._id])


  const authInfo = {
    isLoading,
    userRefetch,
    setUserRefetch,
    setIsLoading,
    logInWithGoogle,
    user,
    loading,
    setLoading,
    usersRefetch,
    setusersRefetch,
    handleGoogleSignIn,
    setUser,
    handleGetFolders,
    loadingFolders,
    folders
  };
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default ContextProvider;
