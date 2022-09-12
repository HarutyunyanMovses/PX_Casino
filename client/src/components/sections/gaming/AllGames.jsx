import React from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";
import Fetch from "..//..//..//JS/services/fetch"
import "./allGames.css"
import GameControler from "./gameControler";


export default function AllGames(params) {

    const [games, setGaes] = useState([])
    const [mousOver, setOver] = useState("")

    useLayoutEffect(() => {
        Fetch.get("casino_px/all_games")
            .then(data => {
                setGaes(data)
            })
            .catch(err => {
                alert("not connection")
            })
    }, [])

    return (
        <div className="allGamesBody">
            <div className="hr_games_zona" />
            <h3 className="h3_games_zona">All Games</h3>
            <div className="allGames">
                {
                    games ? games.map(item => {
                        return (
                            <div className="game_box" key={item._id}
                                onMouseOver={() => { setOver("blok") }}
                                style={{ backgroundImage: `url(${item.src})` }}
                            >
                                <GameControler display={mousOver} />
                                <p className="game_name" >{(item.name).toUpperCase()}</p>
                            </div>
                        )
                    }) : null
                }
            </div>
        </div>
    )
}