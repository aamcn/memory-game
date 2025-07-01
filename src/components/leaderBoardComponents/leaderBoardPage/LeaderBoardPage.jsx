import React from "react";
import { useState } from "react"
import LeaderBoardControls from "../leaderBoardControls/LeaderBoardControls"
import Navbar from "../../navBar/Navbar"
import LeaderBoard from "../leaderBoard/LeaderBoard";
import styles from "./leaderBoardPage.module.css"
import LeaderBoardHeader from "../leaderBoardHeader/LeaderBoardHeader";


function LeaderBoardPage(){
const [leaderBoardEntries, setLeaderBoardEntries] = useState(null)



    return(
        <div className={styles.leaderBoardPage}>
            <Navbar />
            <LeaderBoardHeader />
            <LeaderBoardControls />
            <LeaderBoard />
        </div>
    )
}

export default LeaderBoardPage