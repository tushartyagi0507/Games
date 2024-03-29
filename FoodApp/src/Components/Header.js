import { useState } from "react";
import { LOGO_URL } from "../utils/const";
import {Link} from "react-router-dom";
import useonlineStatus from "../utils/useonlineStatus"


const Header = () => {
  const onlineStatus = useonlineStatus();
  const [loginBtn,setloginBtn] = useState("LogIn")
    return (
      <div className="header">
        <div className="name_logo">
          <img
            className="logo"
            src={LOGO_URL}
          />
         <Link to="/" className="link name"><h3>FoodMania</h3></Link> 
        </div>
        <div className="nav">
          <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/Contact" className="link">Contact Us</Link></li> 
            <li><Link to="/About" className="link">About Us</Link></li> 
            <li><Link to="/Cart" className="link">Cart</Link></li>
            <li><button className="login" onClick={()=>{
              if(loginBtn==="LogIn")setloginBtn("Logout")
              else setloginBtn("LogIn")
            }}>{loginBtn}</button></li>
            <li className="onlineStatus">Active: { onlineStatus ? "✔" : "❌"}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header 