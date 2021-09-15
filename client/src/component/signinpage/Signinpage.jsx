import React ,{useState} from 'react';
import { NavLink } from 'react-router-dom';


import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//import Navlink from '../controll/Navlink';

export default function Signinpage() {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const signInSubmission = async(e)=>{
        e.preventDefault();

        const res = await fetch("/signin",{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        if(data.status === 400 || !data)
        {
            window.alert("invalid registration");
            console.log("invalid reg")
        }else{
            window.alert("valid registration");
            console.log("+++valid reg")
        }
    }

    return (
        <div className="Landingpage-main-div">

       
     <div className="Loginpage-heading-form">
     <h2 className="Landingpage-cname">CAPITAL TRUST LIMITED</h2>

            <form  method="POST">
            
            <PermIdentityOutlinedIcon className="Login-input-icon"/>
            
            
                <br/> <br/>
                <input type="email" placeholder="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}  className="Login-input" required/>
                <br/> <br/>
               
                <LockOutlinedIcon className="Login-input-icon"/>
                
                <input type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password}  className="Login-input" required/>
                <br/><br/>
               
                <button className="Login-input-button-submission" onClick={signInSubmission} >Login
                </button>
                <br/>
        <NavLink exact  to="/home" className="Login-input-forget-password">Forget Password</NavLink>
            </form>
            
{/*      
     </div>
    </div> */}
    </div>
        </div>
    )
}
