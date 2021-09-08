import React,{useState} from 'react';
import logo from "./download.jpg";
import "./Login.css";

 function Login(){

    const [userId,setUserId]=useState("");
    const [password,setPassword]=useState("");

    function loginSubmission(e)
    {
        e.preventDefault()
        alert(`logged in with ${userId} id` )
        console.log("email",userId)
        console.log("password",password)
    }
    function userIdchange(e)
    {
        setUserId(e.target.value);
    }
    function passwordchange(e)
    {
        setPassword(e.target.value);
    }
     
    return (
        <>
        <div className="Login-main">
       {/* <div className="Login-side-img">
            <img src={logo}/>
        </div>*/}
        <div className="Login-entry-box">
        <h1 className="Login-message">Login to your account </h1>
        <br/><br/>
        
            <form onSubmit={loginSubmission}>
                <input type="email" placeholder="User Id" onChange={userIdchange}  className="Login-input" required/>
                <br/> <br/>
                <input type="password" placeholder="Password"  onChange={passwordchange}  className="Login-input" required/>
                <br/><br/>
                <button className="Login-input-button">Login</button>
            </form>
            </div>
        </div>
        <h3 className="Login-footer">footer</h3>
        </>
    )
}
export default Login;