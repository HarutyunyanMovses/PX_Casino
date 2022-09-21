import React from "react";
import { useEffect } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import backgroud from "./imgs/mainBack.jpg"
import "./main.css"

import fetch from "../../JS/services/fetch";

export default function Main(params) {

    return (
        <div className="main" style={{ backgroundImage: `url(${backgroud})` }}>
            <Header />
            <div className="main_body">
                <div className="mainBodyLeft">
                    <div className="leftBody">
                        <div className="mainDescription">
                            <div className="mainDescriptionUp">
                                <h1 className="mainOtherH1">Play</h1>
                                <h1 className="inerH1">Online Casino </h1>
                            </div>
                            <h1 className="mainOtherH1" >& Enjoy</h1>
                        </div>
                        <div className="mainJoinButton">
                            <button className="joinButt">Join</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}