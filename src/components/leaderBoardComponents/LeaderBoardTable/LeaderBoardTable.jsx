import React from "react"
import styles from './leaderBoard.module.css'
import PropTypes from "prop-types";


function LeaderBoardTable({ sortedLeaderBoardData }) {

    if (!sortedLeaderBoardData || sortedLeaderBoardData.length === 0) {
        return (
            <div className={styles.leaderBoardContainer} data-testid="leaderboard-container">
                <p>No data available</p>
            </div>
        );
    }

    return(
        <div className={styles.leaderBoardContainer} data-testid="leaderboard-container">
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
                            <td className={styles.leaderBoardCell} aria-label={`Leaderboard Position ${index + 1}`}>{index + 1}</td>
                            <td className={styles.leaderBoardCell} aria-label={`Player Name ${entry.name}`}>{entry.name}</td>
                            <td className={styles.leaderBoardCell} aria-label={`Finish Time ${entry.time}`}>{entry.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

LeaderBoardTable.propTypes = {
    sortedLeaderBoardData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired
        })
    ).isRequired
};

export default LeaderBoardTable; 