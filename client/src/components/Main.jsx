import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import "./main.css"
import MainBody from "./sections/MainBody/MainBody";
export default function Main(params) {
    
    return(
        <div className="main">
               <Header/>
               <MainBody/>
               <Footer/>
        </div>
    )
}