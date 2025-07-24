import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
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
  //Navigate Hook
  const navigate = useNavigate();

  const [isLoginSelected, setIsLoginSelected] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/home");
  };
  return (
    <>
    <div className="loginContainer">
      <div>
        <button
          onClick={() => {
            setIsLoginSelected(true);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            setIsLoginSelected(false);
          }}
        >
          Signup
        </button>
      </div>
      <div className="userForm">
        {isLoginSelected && (
          <form onSubmit={handleClick} className="loginForm">
            <h1>Login</h1>
            <label className="label">Email: </label>
            <input
              className="email"
              type="email"
              required
              placeholder="Enter your email"
            />
            <br />
            <label className="label">Password: </label>
            <input
              className="password"
              type="password"
              placeholder="Enter your password"
              required
            />
            <br />
            <button>Login</button>
          </form>
        )}
        {!isLoginSelected && (
          <form onSubmit={handleClick} className="signUpForm">
            <h1>Signup</h1>
            <label className="label">Full Name: </label>
            <input required type="text" placeholder="Enter your name" className="name" />
            <br />
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              className="email"
              required
            />
            <br />
            Password:{" "}
            <input
              type="password"
              placeholder="Enter your password"
              className="password"
              required
            />
            <br />
            <button>Signup</button>
          </form>
        )}
      </div>
      </div>
    </>
  );
}

export default Login;
