import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
// @ts-ignore
import Favicon from "./assets/TwitterFavIcon.png";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route
          path="/signup"
          element={
            <Signup
              // footerText="Don't have an account yet?"
              // signInLink="/"
              // signInText="Log in here"
            />
          }
        />
        <Route path="/homepage" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
