import React from "react";


export default function GameControler(params) {

    console.log(params);

    return (
        <div className="game_hover" >
            <button className="game_play">Play</button>
            <button className="game_demo">Demo</button>
        </div>
    )
}