import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
   const { signInUsingGoogle } = useAuth();
   return (
      <>
         <div className="login-form">
            <h2>Login</h2>
            <form onSubmit="">
               <input type="email" placeholder="Your Email" />
               <br />
               <input type="password" placeholder="password" />
               <br />
               <input type="submit" value="Submit" />
            </form>
            <p>
               new to ema-john? <Link to="register">Create Account</Link>
            </p>
            <div>------------or------------</div>
            <button onClick={signInUsingGoogle} className="btn-regular">
               Google sign in
            </button>
         </div>
      </>
   );
};

export default Login;
