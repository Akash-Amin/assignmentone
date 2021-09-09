import React ,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import sideImage from "../abcd.jpeg";
import "./Landingpage.css"

import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//import Navlink from '../controll/Navlink';

export default function Landingpage() {
    
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
        <div className="Landingpage-main-div">
        
         <img src={sideImage}  className="landing-page-img"  />
        
         {/* <div className="Landingpage-nav-logo-detail-main">
           
     <div className="Landingpage-logo-main"> */}
     <div className="Loginpage-heading-form">
     <h2 className="Landingpage-cname">CAPITAL TRUST LIMITED</h2>
   
    
        
            <form onSubmit={loginSubmission}>
            
            <PermIdentityOutlinedIcon className="Login-input-icon"/>
            
            
                <input type="email" placeholder="Login Id" onChange={userIdchange}  className="Login-input" required/>
                <br/> <br/>
               
                <LockOutlinedIcon className="Login-input-icon"/>
                
                <input type="password" placeholder="Password"  onChange={passwordchange}  className="Login-input" required/>
                <br/><br/>
                <button className="Login-input-button-submission">
                    
        <NavLink exact  to="/home" className="Login-input-button">Login</NavLink>
                </button>
            </form>
            
{/*      
     </div>
    </div> */}
    </div>
        </div>
    )
}
