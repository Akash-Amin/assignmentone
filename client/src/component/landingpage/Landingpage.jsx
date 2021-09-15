import React ,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import sideImage from "../abcd.jpeg";
import "./Landingpage.css"

import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//import Navlink from '../controll/Navlink';

export default function Landingpage() {
    
  //  const [userId,setUserId]=useState("");
    //const [password,setPassword]=useState("");


    const [user , setUser]=useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })
    
    let name,value;

    function userIdchange(e)
    {
        // alert(`logged in with ${userId} id` )
        // console.log("email",userId)
        // console.log("password",password)
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value})
    }

    const signUpSubmission = async(e)=>{
        e.preventDefault();

        const {  name, email, phone, work, password, cpassword  } =user;

        const res = await fetch("/register",{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, phone, work, password, cpassword 
            })
        });
        const data = await res.json();
        if(data.status === 422 || !data)
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

       
<svg className="svg-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,96L20,96C40,96,80,96,120,117.3C160,139,200,181,240,213.3C280,245,320,267,360,234.7C400,203,440,117,480,90.7C520,64,560,96,600,117.3C640,139,680,149,720,149.3C760,149,800,139,840,154.7C880,171,920,213,960,245.3C1000,277,1040,299,1080,304C1120,309,1160,299,1200,256C1240,213,1280,139,1320,144C1360,149,1400,235,1420,277.3L1440,320L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
        
         <img src={sideImage}  className="landing-page-img"  />


          
        
         {/* <div className="Landingpage-nav-logo-detail-main">
           
     <div className="Landingpage-logo-main"> */}
     <div className="Loginpage-heading-form">
     <h2 className="Landingpage-cname">CAPITAL TRUST LIMITED</h2>
   
    
        
            {/* <form onSubmit={loginSubmission}> */}
            <form  method="POST">
            
            <PermIdentityOutlinedIcon className="Login-input-icon"/>
            
            
                <input type="text" placeholder="name" name="name" onChange={userIdchange} value={user.name}  className="Login-input" required/>
                <br/> <br/>
                <input type="email" placeholder="email" name="email" onChange={userIdchange} value={user.email}  className="Login-input" required/>
                <br/> <br/>
                <input type="number" placeholder="phone" name="phone" onChange={userIdchange} value={user.phone}  className="Login-input" required/>
                <br/> <br/>
                <input type="text" placeholder="work" name="work" onChange={userIdchange} value={user.work}  className="Login-input" required/>
                <br/> <br/>
                <LockOutlinedIcon className="Login-input-icon"/>
                
                <input type="password" placeholder="Password" name="password" onChange={userIdchange} value={user.password}  className="Login-input" required/>
                <br/><br/>
               
                <LockOutlinedIcon className="Login-input-icon"/>
                
                <input type="password" placeholder="cPassword" name="cpassword"  onChange={userIdchange} value={user.cpassword}  className="Login-input" required/>
                <br/><br/>
                <button className="Login-input-button-submission" onClick={signUpSubmission} >Login
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
