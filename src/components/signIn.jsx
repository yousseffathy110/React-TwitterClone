// @ts-nocheck
import "../styles/login.css";
import React from "react";
import Favicon from "../assets/TwitterFavIcon.png";
import AppleIcon from "../assets/apple icon.png";
import GoogleIcon from "../assets/google icon.png";
import { Link } from "react-router-dom";

const signIn = () => {
  const handleNextButtonClick = () => {
    // Redirect to the signup route
    window.location.href = "/signup";
  };

  return (
    <div className="login-form">
      <img
        src={Favicon}
        alt="twitter icon"
        loading="lazy"
        width="70px"
        className="logo"
      />
      <h2 className="main-heading">Log in to twitter</h2>
      <button>
        <img src={GoogleIcon} alt="google logo" loading="lazy" width="25px" />
        Sign in with google
      </button>
      <button>
        <img src={AppleIcon} alt="apple logo" loading="lazy" width="50px" />
        Sign in with apple
      </button>
      <hr />
      <span className="or"></span>
      <form method="post">
        <input
          type="text"
          placeholder="Enter Email, phone or username"
          required
          id="user-Input"
        />
        <button
          className="special"
          onClick={() => (window.location.href = "/homepage")}
        >
          Next
        </button>
      </form>
      <button className="last">Forget password</button>
      <p className="p1">
        Don't Have an account?
        <Link className="hover-sign" to="/signup">
          sign up
        </Link>
      </p>
    </div>
  );
};

export default signIn;
