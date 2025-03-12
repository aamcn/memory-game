import { Link } from "react-router-dom";
function Navbar(){

    return(
        <>
        <Link to="/">
            Home
        </Link>
        <Link to="/game-display"> 
            Game
        </Link>
        </>
    )
}

export default Navbar;