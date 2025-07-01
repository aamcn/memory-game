import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <>
      <Link to="/game-page">Game</Link>
      <Link to="/leader-board">Leader Board</Link>
    </>
  );
}

export default Navbar;
