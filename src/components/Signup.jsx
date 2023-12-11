// @ts-ignore
import Favicon from "../assets/TwitterFavIcon.png";
import React, { useState } from "react";
import "../styles/signup.css";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Signup = (props) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    try {
      if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        phone === "" ||
        password === ""
      ) {
        alert("Please fill in all required fields.");
      } else {
        navigate("/homepage");
      }
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };

  return (
    <div className="container">
      <img
        src={Favicon}
        alt="twitter logo"
        loading="lazy"
        width="70px"
        className="icon"
      />
      <h2 className="heading">sign up to twitter</h2>
      <form action="" method="post" className="form-data">
        <input
          type="text"
          className="special-input"
          placeholder="Yousef"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <i className="fa-regular fa-address-card" id="fname-icon"></i>

        <input
          type="text"
          placeholder="Fathy"
          className="special-input2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <i className="fa-regular fa-address-card" id="lname-icon"></i>

        <input
          type="email"
          placeholder="example@cis.com"
          className="special-input3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <i className="fa-regular fa-envelope" id="mail-icon"></i>

        <input
          type="tel"
          min="11"
          max="11"
          placeholder="01012345678"
          className="special-input4"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <i className="fa-solid fa-phone" id="phone-icon"></i>

        <input
          type="password"
          minLength={8}
          maxLength={22}
          placeholder="*************"
          className="special-input5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <i className="fa-solid fa-lock" id="password-icon"></i>
        <br />
        <br />
        <button className="redirect" onClick={handleSignUp}>
          {props.buttonText || "sign up"}
        </button>
      </form>
      <br />
      <br />
      <br />
      <p className="p2">
        {props.footerText || "Already have an account?"}{" "}
        <Link to={props.signInLink || "/"}>
          {props.signInText || "Sign in"}
        </Link>
      </p>
    </div>
  );
};

Signup.propTypes = {
  // logoSrc: PropTypes.string,
  buttonText: PropTypes.string,
  footerText: PropTypes.string,
  signInLink: PropTypes.string,
  signInText: PropTypes.string,
};

export default Signup;
