import React from "react";
import "./header.css";
import logo from "..//imgs/bigLogo.ico";
import up from "..//imgs/up.png"
import down from "..//imgs/down.png"

const Header = () => {



  return (
    <div className="mainHeader">
      <div className="mainHeaderRight">
        <img className="headerLogo" src={logo} alt="img" />
        <div className="mainHelp"> Help </div>
        <div className="aboutStyle" >About as</div>
        <div className="mainLanguage">Language <img src={down} alt="down" /> </div>
      </div>
      <div className="mainHeaderLeft">
        <button className="logButt"> Log In</button>
        <button className="signButt"> Sign Up </button>
      </div>
    </div>
  );
}


export default Header;