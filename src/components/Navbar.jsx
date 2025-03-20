import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <Link to="/game-page">Game</Link>
      <Link to="/">Landing Page</Link>
    </>
  );
}

export default Navbar;
