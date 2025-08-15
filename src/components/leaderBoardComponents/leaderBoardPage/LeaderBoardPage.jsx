import React, { useEffect } from "react";
import { useState } from "react"
import LeaderBoardControls from "../leaderBoardControls/LeaderBoardControls"
import Navbar from "../../navBar/Navbar"
import LeaderBoardTable from "../LeaderBoardTable/LeaderBoardTable";
import styles from "./leaderBoardPage.module.css"
import LeaderBoardHeader from "../leaderBoardHeader/LeaderBoardHeader";
import { sortByTime } from "../../../modules/sortByTime/sortByTime";

function LeaderBoardPage(){
    const [sortedLeaderBoardData, setSortedLeaderBoardData] = useState([])
    const [selectedDifficulty, setSelectedDifficulty] = useState("Easy");
    const [leaderBoardData, setLeaderBoardData] = useState([]);

    const easyUrl = 'http://localhost:3000/easy-leader-board/all-easy-scores'
    const mediumUrl = 'http://localhost:3000/medium-leader-board/all-medium-scores'
    const hardUrl = 'http://localhost:3000/hard-leader-board/all-hard-scores'

    // Fetch leaderboard data based on the selected difficulty
    const fetchLeaderBoardData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setLeaderBoardData(data);
            // Process the data as needed
        } catch (error) {
            console.error("Error fetching leaderboard data:", error);
        }
    }

    // Sort leaderboard data by time and store in state.
    useEffect(() => {
        if(!leaderBoardData || leaderBoardData.length === 0) return;
        setSortedLeaderBoardData(leaderBoardData.sort(sortByTime));
    }, [leaderBoardData]);

    // Fetch leaderboard data base when the selected difficulty changes.
    useEffect(() => {
        // Reset leaderboard data when difficulty changes
        setLeaderBoardData([]);
        if (selectedDifficulty === "Easy") {
            fetchLeaderBoardData(easyUrl);
        }
        if (selectedDifficulty === "Medium") {
            fetchLeaderBoardData(mediumUrl);
        }
        if (selectedDifficulty === "Hard") {
            fetchLeaderBoardData(hardUrl);
        }
    }, [selectedDifficulty]);

    return(
        <div className={styles.leaderBoardPage}>
            <Navbar />
            <LeaderBoardHeader selectedDifficulty={selectedDifficulty} />
            <LeaderBoardControls selectedDifficulty={selectedDifficulty} setSelectedDifficulty={setSelectedDifficulty} />
            <LeaderBoardTable sortedLeaderBoardData={sortedLeaderBoardData} />
        </div>
    )
}

export default LeaderBoardPage