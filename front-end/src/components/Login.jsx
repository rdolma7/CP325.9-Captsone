import { useState } from "react";

function Login() {
const [login, setLogin]= useState("")

    return ( 
        <>
        <form>
        <h1>Login</h1>
        <div>
        Email: <input className="email" type="email" placeholder="Enter your email"/>
        <br />
        Password: <input className="password" type="password" placeholder="Enter your password"/>
        </div>
        <button className="button">Login</button>
        </form>
      
        </>
     );
}

export default Login;