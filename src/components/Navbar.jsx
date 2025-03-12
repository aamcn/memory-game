import { Link } from "react-router-dom";
function Navbar(){

    return(
        <>
        <Link to="/">
            Home
        </Link>
        <Link to="/game-page"> 
            Game
        </Link>
        </>
    )
}

export default Navbar;