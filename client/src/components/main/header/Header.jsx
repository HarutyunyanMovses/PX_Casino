import React from "react";
import "./header.css";
import logo from "..//imgs/bigLogo.ico";
import up from "..//imgs/up.png"
import down from "..//imgs/down.png"
import { useState } from "react";
import { useEffect } from "react";
import signUpDispatch from "../../../Redux/actions/signUpDispatch";

const Header = ({ leng, setLang }) => {
  const [isUp, setisUp] = useState(false)
  const [aboutAs, setAboutAs] = useState("About us")
  const [help, setHelp] = useState("Help")
  const [language, setLanguage] = useState("Language")
  const [logIn, setLogIn] = useState("Log in")
  const [signUp, setSignUp] = useState("Sign Up")

  const actions = signUpDispatch()

  const hendlerisUp = () => {
    if (isUp) {
      setisUp(false)
    } else {
      setisUp(true)
    }
  }
  useEffect(() => {
    switch (leng) {
      case "en":
        setAboutAs("About us")
        setHelp("Help")
        setLanguage("Language")
        setLogIn("Log in")
        setSignUp("Sign Up")
        break;
      case "ru":
        setAboutAs("О нас")
        setHelp("Помощь")
        setLanguage("Язык")
        setLogIn("Войти")
        setSignUp("Создать")
        break;
      case "am":
        setAboutAs("Մեր մասին")
        setHelp("Օգնություն")
        setLanguage("Լեզու")
        setLogIn("Մուտք")
        setSignUp("Գրանցվել")
        break;
      default:
        console.log("error");
        break;
    }

  }, [leng])

  return (
    <div className="mainHeader">
      <div className="mainHeaderRight">
        <img className="headerLogo" src={logo} alt="img" />
        <div className="mainHelp"> {help} </div>
        <div className="aboutStyle" >{aboutAs}</div>
        <div className="mainLanguage" onClick={hendlerisUp}>
          {!isUp ?
            (
              <>
                {language} <img src={down} alt="down" />
              </>
            )
            :
            (
              <div className="mainLanguageUp">
                {language} <img src={up} alt="Up" />
                <p onClick={() => setLang("en")}>English </p>
                <p onClick={() => setLang("ru")}>Русский</p>
                <p onClick={() => setLang("am")}>Հայերեն</p>
              </div>
            )

          }
        </div>
      </div>
      <div className="mainHeaderLeft">
        <button className="logButt"> {logIn}</button>
        <button className="signButt"  onClick={actions.isOpenSignUp}> {signUp} </button>
      </div>
    </div>
  );
}


export default Header;