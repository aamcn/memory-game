import React from "react"
import styles from './leaderBoard.module.css'
import PropTypes from "prop-types";
import LeaderBoardControls from "../leaderBoardControls/LeaderBoardControls";


function LeaderBoardTable({ sortedLeaderBoardData, selectedDifficulty, setSelectedDifficulty }) {

    if (!sortedLeaderBoardData || sortedLeaderBoardData.length === 0) {
        return (
            <div className={styles.leaderBoardContainer} data-testid="leaderboard-container">
                <p>No data available</p>
            </div>
        );
    }

    return(
        <div className={styles.leaderBoardContainer} data-testid="leaderboard-container">
            <LeaderBoardControls selectedDifficulty={selectedDifficulty} setSelectedDifficulty={setSelectedDifficulty} />
            <table className={styles.leaderBoardTable} aria-label="Leader Board Table">
                <thead className={styles.leaderBoardHeader}>
                    <tr className={styles.leaderBoardRow}>
                        <th className={styles.leaderBoardCell} aria-label="Leaderboard Position">Position</th>
                        <th className={styles.leaderBoardCell} aria-label="Player Name">Player Name</th>
                        <th className={styles.leaderBoardCell} aria-label="Finish Time">Finish Time</th>
                    </tr>
                </thead>
                <tbody className={styles.leaderBoardBody} >
                    {sortedLeaderBoardData.map((entry, index) => (
                        <tr key={entry.id} className={styles.leaderBoardRow} data-testid={`row-${index + 1}`} aria-label={`Row ${index + 1}`}>
                            <td className={styles.leaderBoardEntryCell} aria-label={`Leaderboard Position ${index + 1}`}>{index + 1}</td>
                            <td className={styles.leaderBoardEntryCell} aria-label={`Player Name ${entry.player_name}`}>{entry.player_name}</td>
                            <td className={styles.leaderBoardEntryCell} aria-label={`Finish Time ${entry.finish_time}`}>{entry.finish_time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

LeaderBoardTable.propTypes = {
    setSelectedDifficulty: PropTypes.func.isRequired,
    selectedDifficulty: PropTypes.string.isRequired,
    sortedLeaderBoardData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired
        })
    ).isRequired
};

export default LeaderBoardTable; 