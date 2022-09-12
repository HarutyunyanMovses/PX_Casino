import React from "react";
import "./header.css";
import logo from "..//..//..//src/production_icons/big-logo.png";

const Header = () => {


    
  return (
    <div className="Cheader">
      <img className="headerLogo" src={logo} alt="img"/>
      <div className="aboutDev">
        {
        !0?(
          <div className="aboutStyle" >About as</div>
        ) : (
          <div className="aboutStyle_close" >Close</div>
        )
        }
      </div>
      <div className="thisPerson">
        <div
          className="thisImg"
          style={{backgroundImage : `url()`}}
        />
        <p className="thisFullName">{"name lastName"}</p>
      </div>
    </div>
  );
}


export default Header;