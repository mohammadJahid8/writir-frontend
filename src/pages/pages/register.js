import React, { useEffect, useContext, useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppSettings } from "./../../config/app-settings.js";
import Brand from "../../components/brands/Brand.jsx";
import computir from "../../assets/subtract.png";
import rantir from "../../assets/brandLogo.png";
import writir from "../../assets/writir.png";
// eslint-disable-next-line
import chattir from "../../assets/chattir.png";
import webtir from "../../assets/webtir.png";
import googleIcon from "../../assets/google-icon.png";
import githubIcon from "../../assets/github-icon.png";
import computirIcon from "../../assets/computir-icon.png";
import SiteTypeCard from "../../components/cards/SiteTypeCard.jsx";
import SocialMediaButton from "../../components/buttons/SocialMediaButton.jsx";
import { UserContext } from "../../context/context.js";
import axios from "axios";
import Loader from "../../components/Loader/Loader.jsx";
import api from "../../api/axios.js";

function PagesRegister() {
  const context = useContext(AppSettings);
  const { handleGoogleSignIn, loading, userRefetch, setUserRefetch } = useContext(UserContext);
  const navigate = useNavigate()
  const [userLoading, setUserLoading] = useState(false)


  useEffect(() => {
    context.setAppHeaderNone(true);
    context.setAppSidebarNone(true);
    context.setAppContentClass("p-0");
    context.setAppContentFullHeight(true);

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

    const data = new FormData(event.target);
    const entries = Object.fromEntries(data.entries());

    if (entries.password !== entries.confirmPassword) {
      return alert("Password & Confirm does not match!")
    }

    console.log({ entries })
    try {
      setUserLoading(true);
      const promise = await api.post(`/user/signup`, entries);
      if (promise.status === 200) {
        localStorage.setItem("rantirToken", promise.data.data);
        setUserRefetch(!userRefetch);
        setTimeout(() => {
          alert("Registered!")
          navigate("/");
          setUserLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setUserLoading(false);
      alert(error.response.data.message || `Register failed`)
    }
  }

  if (userLoading) {
    return <Loader />
  }

  return (
    <div className="register" style={{
      gap: "10rem"
    }}>
      <div className="register-content">
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
          <SocialMediaButton
            label="Continue with Computir"
            imageSrc={computirIcon}
          />

          <hr />
          <div className="mb-3">
            <label className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              disabled={loading}
              type="text"
              className="form-control form-control-lg fs-15px"
              placeholder="e.g John Smith"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              disabled={loading}
              type="text"
              className="form-control form-control-lg fs-15px"
              placeholder="username@address.com"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <input
              disabled={loading}
              type="password"
              className="form-control form-control-lg fs-15px"
              name="password"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Confirm Password <span className="text-danger">*</span>
            </label>
            <input
              disabled={loading}
              type="password"
              className="form-control form-control-lg fs-15px"
              name="confirmPassword"
              required
            />
          </div>

          <div className="mb-3">
            <div className="form-check">
              <input
                disabled={loading}
                className="form-check-input"
                type="checkbox"
                value=""
                id="customCheck1"
                required
              />
              <label className="form-check-label fw-500" htmlFor="customCheck1">
                I have read and agree to the <a href="#/">Terms of Use</a> and{" "}
                <a href="#/">Privacy Policy</a>.
              </label>
            </div>
          </div>
          <div className="mb-3">
            <button
              disabled={loading}
              type="submit"
              className="btn btn-theme btn-lg fs-15px fw-500 d-block w-100"
            >
              Sign Up
            </button>
          </div>
          <div className="text-muted text-center">
            Already have an account? <Link to="/pages/login">Sign In</Link>
          </div>
        </form>
      </div>
      <div className="">
        <div className="computir d-flex gap-2">
          <img src={computir} alt="computir" />
          <div className="d-flex gap-2 flex-1">
            <h4>Computir</h4>
            <h4 className="text-muted fw-light">Suite</h4>
          </div>
        </div>
        <p className="my-3">
          A publishing workspace suite for high-impact and AI-forward teams{" "}
        </p>
        <div className="d-flex gap-4">
          <a href="/">View Entire Suite</a>
          <a href="/">Get Support</a>
        </div>
        <div className="col mt-3 mx-auto mx-lg-0 max-width-lg"
        // style={{
        //   maxWidth: "300px"
        // }}
        >
          <SiteTypeCard
            color="#FFCC00"
            imageSrc={"/rantir_logo.png"}
            boldText="Build & Deploy"
            normalText=" your AI with data as you digitize, store and publish your collections online, building powerful dashboards."
          />
          <SiteTypeCard
            color="#640DF3"
            imageSrc={writir}
            boldText="Write & Publish"
            normalText=" documents and proposals across your team with the help of an AI-Copilot & creative templates."
          />
          <SiteTypeCard
            color="#1F6BFF"
            imageSrc={webtir}
            boldText="Launch & Grow"
            normalText=" creative digital marketing websites and landing, generated by AI to help grow a larger audience. "
          />
        </div>
        <div className="row gap-2 mt-3">
          {/* <SiteTypeCard
            color="#FF9500"
            imageSrc={chattir}
            boldText="Converse & Chat"
            normalText=" using AI & automations inside your team using both email and messaging solutions."
          /> */}

        </div>
      </div>
    </div>
  );
}

export default PagesRegister;
