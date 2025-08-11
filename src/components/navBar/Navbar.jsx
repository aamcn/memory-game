import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div data-testid="navbar" className="navbar" id="navbar" aria-label="navbar">
      <Link id="game-link" to="/game-page" aria-label="Game Page Link">Game</Link>
      <Link id="leaderboard-link" to="/leader-board" aria-label="Leader Board Link">Leader Board</Link>
    </div>
  );
}

export default Navbar;
