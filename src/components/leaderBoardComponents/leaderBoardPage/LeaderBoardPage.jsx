import React, { useEffect } from "react";
import { useState } from "react"
import LeaderBoardControls from "../leaderBoardControls/LeaderBoardControls"
import Navbar from "../../navBar/Navbar"
import LeaderBoardTable from "../LeaderBoardTable/LeaderBoardTable";
import styles from "./leaderBoardPage.module.css"
import LeaderBoardHeader from "../leaderBoardHeader/LeaderBoardHeader";
import { sortByTime } from "../../../modules/sortByTime/sortByTime";

function LeaderBoardPage(){
    const [leaderBoardEntries, setLeaderBoardEntries] = useState([])
    const [selectedDifficulty, setSelectedDifficulty] = useState("Easy");

    const leaderBoardDataEasy = [
        { id: 3, name: 'Tony', time: "9 seconds" },
        { id: 4, name: "Natasha", time: "15 seconds" },
        { id: 1, name: "Bob", time: "10 seconds" },
        { id: 2, name: "Steve", time: "12 seconds" }
    ]
    const leaderBoardDataMedium = [
        { id: 3, name: 'Priya', time: "15 seconds" },
        { id: 4, name: "Tina", time: "17 seconds" },
        { id: 1, name: "Blanche", time: "18 seconds" },
        { id: 2, name: "Stan", time: "22 seconds" }
    ]

    const leaderBoardDataHard = [
        { id: 3, name: 'Pink', time: "20 seconds" },
        { id: 4, name: "Tinkerbell", time: "35 seconds" },
        { id: 1, name: "Sam", time: "32 seconds" },
        { id: 2, name: "Paul", time: "29 seconds" }
    ]

    useEffect(() => {
        if (selectedDifficulty === "Easy") {
            setLeaderBoardEntries(leaderBoardDataEasy.sort(sortByTime));
        }
        if (selectedDifficulty === "Medium") {
            setLeaderBoardEntries(leaderBoardDataMedium.sort(sortByTime));
        }
        if (selectedDifficulty === "Hard") {
            setLeaderBoardEntries(leaderBoardDataHard.sort(sortByTime));
        }
    }, [selectedDifficulty]);

    return(
        <div className={styles.leaderBoardPage}>
            <Navbar />
            <LeaderBoardHeader selectedDifficulty={selectedDifficulty} />
            <LeaderBoardControls selectedDifficulty={selectedDifficulty} setSelectedDifficulty={setSelectedDifficulty} />
            <LeaderBoardTable sortedLeaderBoardData={leaderBoardEntries} />
        </div>
    )
}

export default LeaderBoardPage