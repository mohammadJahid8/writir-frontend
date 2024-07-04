import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppSettings } from "./../../config/app-settings.js";
import Brand from "../../components/brands/Brand.jsx";
import googleIcon from "../../assets/google-icon.png";
import githubIcon from "../../assets/github-icon.png";
import computirIcon from "../../assets/computir-icon.png";
import SocialMediaButton from "../../components/buttons/SocialMediaButton.jsx";
import { UserContext } from "../../context/context.js";

import Loader from "../../components/Loader/Loader.jsx";
import api from "../../api/axios.js";
function PagesLogin() {
  const context = useContext(AppSettings);

  const { handleGoogleSignIn, loading, userRefetch, setUserRefetch } = useContext(UserContext);
  const navigate = useNavigate()
  const [userLoading, setUserLoading] = useState(false)
  useEffect(() => {
    context.setAppHeaderNone(true);
    context.setAppSidebarNone(true);
    context.setAppContentClass("p-0");
    context.setAppContentFullHeight(true);
    context.setAppFooter(false);
    return function cleanUp() {
      context.setAppHeaderNone(false);
      context.setAppSidebarNone(false);
      context.setAppContentClass("");
      context.setAppContentFullHeight(false);
    };

    // eslint-disable-next-line
  }, []);



  async function handleSubmit(event) {
    event.preventDefault();
    setUserLoading(true);
    const data = new FormData(event.target);
    const entries = Object.fromEntries(data.entries());

    try {
      const promise = await api.post(`/user/signin`, entries);
      if (promise.status === 200) {
        localStorage.setItem("rantirToken", promise.data.data);
        setUserRefetch(!userRefetch);
        setTimeout(() => {
          alert("Logged In!")
          navigate("/");
          setUserLoading(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      setUserLoading(false);
      alert(error.response.data.message || `Login failed`)
    }
  }

  if (userLoading) {
    return <Loader />
  }
  return (
    <div className="login gap-5">
      <div className="login-content">
        <form onSubmit={handleSubmit}>

          <Brand />
          <h1 className="fs-4 mt-2">Start An Account</h1>
          <p className="text-muted">
            For your protection, please verify your identity.
          </p>
          <SocialMediaButton
            label="Continue with Google"
            imageSrc={googleIcon}
            onClick={handleGoogleSignIn}
          />
          <SocialMediaButton
            label="Continue with Github"
            imageSrc={githubIcon}
          />


          <hr />

          <div className="mb-3">
            <label className="form-label">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              required
              disabled={loading}
              type="text"
              className="form-control form-control-lg fs-15px"
              placeholder="username@address.com"
              name="email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label d-flex justify-content-between">
              <div>
                Password <span className="text-danger">*</span>
              </div>
              <Link
                className="text-end text-underline mb-0"
                to="/pages/forgot-password"
              >
                Forgot password?
              </Link>
            </label>
            <input
              required
              disabled={loading}
              type="password"
              className="form-control form-control-lg fs-15px"
              name="password"
            />
          </div>
          <div className="mb-3">
            <button
              disabled={loading}
              type="submit"
              className="btn btn-theme btn-lg fs-15px fw-500 d-block w-100"
            >
              Sign In
            </button>
          </div>
          <div className="text-muted text-center">
            Don't have an account? <Link to="/pages/register">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PagesLogin;
