import React from "react";
import heart from "..//..//..//gaminIg_icons/heart.png"
import blackHeart from "..//..//..//gaminIg_icons/bleackHeart.png"
import clover from "..//..//..//gaminIg_icons/clover.png"
import romb from "..//..//..//gaminIg_icons/romb.png"
// import border from "..//..//..//gaminIg_icons/border.png"      masteri border px-i staylov
// import jackpot from "..//..//..//gaminIg_icons/jackpot.png"    jackpot logo  px-i staylov 
import "./jackpot.css"

export default function Jeckpot(params) {

    return (
        <div className="jeckpot_body">
            <div className="jack_icon">
                <h3 className="jack_h3">PX Casino Jackpot</h3>
                {/* <img src={jackpot} alt="JACKPOT" id="jack_icon" /> */}
            </div>
            <div className="lear_box">

                <div className="lear" style={{ backgroundImage: `url(})` }} >
                    <p className="amount"> 19999999999</p> <img src={ blackHeart } alt="" />
                </div>
                <div className="lear" style={{ backgroundImage: `url()` }} >
                    <p className="amount"> 19999999999</p> <img src={ heart } alt="" />
                </div>
                <div className="lear" style={{ backgroundImage: `url()` }} >
                    <p className="amount"> 19999999999</p> <img src={ clover } alt="" />
                </div>
                <div className="lear" style={{ backgroundImage: `url()` }} >
                    <p className="amount"> 19999999999</p> <img src={ romb } alt="" />
                </div>
            </div>
        </div>
    )
}