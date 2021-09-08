import React from 'react';
import logo from "../ct-logo-clear.png"
import "./Header.css"

export default function Header() {
    return (
        <>
        <div className="Header-main">
        <img src={logo}  className="Header-logo-img"/>   
       <div className="Header-detail">
       
     <label className="Header-company-name" >CAPITAL TRUST LIMITED</label>
    <br></br>
   <hr/>
   <br/>
     <label className="header-company-experience">35+ YEARS OF EXPERIENCE</label>
      
        
        </div>
        </div>
        </>
    )
}
