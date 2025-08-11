import styles from "./header.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className={styles.headerContainer} data-testid="header" aria-label="header">
      <div className={styles.titleContainer} data-testid="header-title-container">
        <Link data-testid="header-title" id="game-title" className={styles.gameTitle} aria-label="Game Title: Poke-Mem" to="/memory-game/game-page">Poke-Mem</Link>
      </div>
    </header>
  );
}

export default Header;
