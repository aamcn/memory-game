import styles from "./leaderBoardControls.module.css"
import React from "react";

function LeaderBoardControls(){

    return(
        <div className={styles.leaderBoardControls}>
            <label>Leader Boards</label>
            <select>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>
        </div>
    )
}

export default LeaderBoardControls