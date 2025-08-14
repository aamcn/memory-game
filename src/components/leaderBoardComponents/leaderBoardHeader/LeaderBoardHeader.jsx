import React from "react";
import styles from "./leaderBoardHeader.module.css";
import PropTypes from "prop-types";

function LeaderBoardHeader({ selectedDifficulty }) {
  return (
    <div
      className={styles.leaderBoardHeadContainer}
      data-testid="leader-board-header"
    >
      <h1
        className={styles.leaderBoardTitle}
        aria-label={`${selectedDifficulty} Leader Board`}
      >
        {selectedDifficulty} Leader Board
      </h1>
    </div>
  );
}

LeaderBoardHeader.propTypes = {
  selectedDifficulty: PropTypes.string.isRequired,
};

export default LeaderBoardHeader;
