import { useState } from "react";
import React from "react";

function Login() {
  const [login, setLogin] = useState("");
  const [signup, setSignup] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
//   Login States
const [loginEmail, setLoginEmail]=useState("")
const [loginPassword, setLoginPassword]=useState("")
//Signup States
const [signupFullName, setSignupFullName]=useState("")
const [signupEmail, setSignupEmail]=useState("")
const [signupPassword, setSignupPassword]=useState("")
//Validation
const isLoginValid=loginEmail.trim()!=="" && loginPassword.trim()!==""
const isSignupValid=signupFullName.trim()!=="" && signupPassword.trim()!=="" && signupEmail.trim()!==""

const handleClick = () => {};
  return (
    <>
      <div>
        <div>
          <button onClick={()=>{setSignup(false)}}>Login</button>
          <button onClick={()=>{setSignup(true)}}>Signup</button>
        </div>
        <div className={`form_Selected ${isSignup ? 'form_Selected2': ""}`}> //Ternary
          <div className="loginForm">
            <h1>Login</h1>
            <label className="label">Email: </label>
            <input
              className="email"
              type="email"
              placeholder="Enter your email"
            />
            <br />
            <label className="label">Password: </label>
            <input
              className="password"
              type="password"
              placeholder="Enter your password"
            />
            <br />
            <button onClick={handleClick} className="button">
              Login
            </button>
          </div>

          <div className="signUpForm">
            <h1>Signup</h1>
            <label className="label">Full Name: </label>
            <input type="text" placeholder="Enter your name" className="name" />
            <br />
            Email :<input
              type="email"
              placeholder="Enter your email"
              className="email"
            />
            <br />
            Password: <input
              type="password"
              placeholder="Enter your password"
              className="password"
            />
            <br />
            <button>Signup</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
