import React from "react"
import styles from './leaderBoard.module.css'

function LeaderBoard(){

    return(
        <div className={styles.leaderBoardContainer}>
            <table>
                <tr>
                    <th>Place</th>
                    <th>Name</th>
                    <th>Time</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tony</td>
                    <td>10 seconds</td>
                </tr>
            </table>
        </div>
    )
}

export default LeaderBoard; 