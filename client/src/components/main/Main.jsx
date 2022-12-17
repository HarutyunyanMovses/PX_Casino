import React from "react";
import { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import backgroud from "./imgs/mainBack.jpg"
import "./main.css"
import SignUp from "./signUp/SignUp";
import {useSelector} from "react-redux"
import signUpDispatch from "../../Redux/actions/signUpDispatch";

export default function Main(params) {
    const signUpisOpen = useSelector(state => state.signReducer.signUpisOpen)
    const actions = signUpDispatch()
    const [leng, setLang] = useState("en")
    const [join, setJoin] = useState("Join")
    const [play, setPlay] = useState("Play")
    const [onCas, setOncas] = useState("Online Casino")
    const [enjoy, setEnjoy] = useState("Enjoy")


    useEffect(() => {
        switch (leng) {
            case "en":
                setJoin("Join")
                setPlay("Play")
                setOncas("Online Casino")
                setEnjoy("& Enjoy")
                break;
            case "ru":
                setJoin("В перёд")
                setPlay("Играй в")
                setOncas("Онлайн-Казино ")
                setEnjoy("и Наслаждайся")
                break;
            case "am":
                setJoin("Միացիր")
                setPlay("Խաղա")
                setOncas("Առցանց Կազինո ")
                setEnjoy("և Վայելիր")
                break;
            default:
                console.log("error");
                break;
        }

    }, [leng])

    return (
        <div className="main" style={{ backgroundImage: `url(${backgroud})` }}>
            <Header leng={leng} setLang={setLang} />
            <div className="main_body">
                <div className="mainBodyLeft">
                    <div className="leftBody">
                        <div className="mainDescription">
                            <div className="mainDescriptionUp">
                                <h1 className="mainOtherH1">{play}</h1>
                                <h1 className="inerH1">{onCas} </h1>
                            </div>
                            <h1 className="mainOtherH1" >{enjoy}</h1>
                        </div>
                        <div className="mainJoinButton">
                            <button className="joinButt"  onClick={actions.isOpenSignUp}>{join}</button>
                        </div>
                    </div>
                </div>
            </div>
           {
              signUpisOpen?<SignUp />:null
            
           } 
            <Footer />
        </div>
    )
}

///   let a = 8  let a = new Number(8)