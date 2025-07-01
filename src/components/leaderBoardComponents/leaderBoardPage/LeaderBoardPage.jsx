import React from "react";
import { useState } from "react"
import LeaderBoardControls from "../leaderBoardControls/LeaderBoardControls"
import Navbar from "../../navBar/Navbar"
import LeaderBoard from "../leaderBoard/LeaderBoard";

function LeaderBoardPage(){
const [leaderBoardEntries, setLeaderBoardEntries] = useState(null)



    return(
        <div>
            <Navbar />
            <LeaderBoardControls />
            <LeaderBoard />
        </div>
    )
}

export default LeaderBoardPage