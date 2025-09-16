import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import React from "react";

function Navbar() {
  return (
    <nav
      data-testid="navbar"
      className={styles.navbar}
      id="navbar"
      aria-label="navbar"
    >
      <Link id="game-link" to="/memory-game/game-page" aria-label="Game Page Link">
        Game
      </Link>
      <Link
        id="leaderboard-link"
        to="/memory-game/leader-board"
        aria-label="Leader Board Link"
      >
        Leader Board
      </Link>
    </nav>
  );
}

export default Navbar;
