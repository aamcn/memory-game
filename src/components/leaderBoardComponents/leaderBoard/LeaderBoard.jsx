import React from "react";
import { useState } from "react"
import LeaderBoardControls from "../leaderBoardControls/LeaderBoardControls"
import Navbar from "../../navBar/Navbar"

function LeaderBoard(){
const [leaderBoard, setLeaderBoard] = useState(null)



    return(
        <div>
            <Navbar />
            <LeaderBoardControls />
        </div>
    )
}

export default LeaderBoard