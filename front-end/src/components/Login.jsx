import { useState } from "react";

function Login() {
const [login, setLogin]= useState("")

    return ( 
        <>
        <div className="loginForm">
        <h1>Login</h1>
        Email: <input className="email" type="email" placeholder="Enter your email"/>
        <br />
        Password: <input className="password" type="password" placeholder="Enter your password"/>
        <br />
        <button className="button">Login</button>
         </div>
        </>
     );
}

export default Login;