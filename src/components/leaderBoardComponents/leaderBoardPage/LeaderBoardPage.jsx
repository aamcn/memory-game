import React from "react";
import { useState } from "react"
import LeaderBoardControls from "../leaderBoardControls/LeaderBoardControls"
import Navbar from "../../navBar/Navbar"
import LeaderBoard from "../leaderBoard/LeaderBoard";
import styles from "./leaderBoardPage.module.css"


function LeaderBoardPage(){
const [leaderBoardEntries, setLeaderBoardEntries] = useState(null)



    return(
        <div className={styles.leaderBoardPage}>
            <Navbar />
            <LeaderBoardControls />
            <LeaderBoard />
        </div>
    )
}

export default LeaderBoardPage