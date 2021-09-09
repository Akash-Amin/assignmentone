/*import React,{useState} from 'react';
import logo from "./download.jpg";
import "./Login.css";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

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
        <div className="Login-side-img">
        <h3>CAPITAL TRUST LIMITED</h3>
            <img src={logo}/>
            
        </div>
        <div className="Login-entry-box">
        <PeopleAltIcon className="Login-peoples-icon"/> 
        <br/><br/>
        
            <form onSubmit={loginSubmission}>
            
            <PermIdentityOutlinedIcon/>
            
                <input type="email" placeholder="User Id" onChange={userIdchange}  className="Login-input" required/>
                <br/> <br/>
               
                <LockOutlinedIcon />
                
                <input type="password" placeholder="Password"  onChange={passwordchange}  className="Login-input" required/>
                <input type="checkbox" required/>
                <br/><br/>
                <EmailOutlinedIcon/>
                <button className="Login-input-button">Login</button>
            </form>
            </div>
        </div>
        </>
    )
}
export default Login;*/