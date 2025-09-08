import React from "react";
import styles from "./leaderBoardHeader.module.css";
import PropTypes from "prop-types";
import Navbar from "../../navBar/Navbar";

function LeaderBoardHeader({ selectedDifficulty }) {
  return (
    <div
      className={styles.leaderBoardHeadContainer}
      data-testid="leader-board-header"
    >
      <Navbar />
      <h1
        className={styles.leaderBoardTitle}
        data-testid="leader-board-title"
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
