import { useState } from "react";
import React from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   Login States
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  //Signup States
  const [signupFullName, setSignupFullName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  //Validation
  const isLoginValid = loginEmail.trim() !== "" && loginPassword.trim() !== "";
  const isSignupValid =
    signupFullName.trim() !== "" &&
    signupPassword.trim() !== "" &&
    signupEmail.trim() !== "";

  const handleClick = () => {};
  return (
    <>
      <div>
        <button
          onClick={() => {
            setSignup(false);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            setSignup(true);
          }}
        >
          Signup
        </button>
      </div>
      <div className={`form_Selected ${isLoggedIn ? "form_Selected2": ""}`}> {/* Ternary */}
        <div className="loginForm">
          <h1>Login</h1>
          <label className="label">Email: </label>
          <input
            value={loginEmail}
            onChange={(event) => setLoginEmail(event.target.value)}
            className="email"
            type="email"
            placeholder="Enter your email"
          />
          <br />
          <label className="label">Password: </label>
          <input
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
            className="password"
            type="password"
            placeholder="Enter your password"
          />
          <br />
          {isLoginValid && <button>Login</button>}
        </div>
        <div className="signUpForm">
          <h1>Signup</h1>
          <label className="label">Full Name: </label>
          <input
            value={signupFullName}
            onChange={(event) => setSignupFullName(event.target.value)}
            type="text"
            placeholder="Enter your name"
            className="name"
          />
          <br />
          Email:
          <input
            value={signupEmail}
            onChange={(event) => setSignupEmail(event.target.value)}
            type="email"
            placeholder="Enter your email"
            className="email"
          />
          <br />
          Password:{" "}
          <input
            value={signupPassword}
            onChange={(event) => setSignupPassword(event.target.value)}
            type="password"
            placeholder="Enter your password"
            className="password"
          />
          <br />
          {isSignupValid && <button>Signup</button>}
        </div>
      </div>
    </>
  );
}

export default Login;
