import React from "react";
import AllGames from "../gaming/AllGames";
import Jackpot from "../jeckpotCasinopx/Jackpot";
import "./mainBody.css"

export default function MainBody(params) {
    

    return(
        <div className="sections">
           <Jackpot/>
           <AllGames/>
        </div>
    )
}