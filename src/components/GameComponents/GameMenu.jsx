import Button from "../../elements/Button";

function GameMenu(){

    return(
        <>
            <div id="game-menu-window">

                <div id="menu-title">
                    <h2>Menu</h2>    
                </div>
                <div id="menu-buttons-container">
                    <Button buttonText={"Start Game"} ></Button>
                </div>
            </div>
        </>
    )
}

export default GameMenu;