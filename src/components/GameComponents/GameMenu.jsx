import Button from "../../elements/Button";

function GameMenu({ handleStartClick }){

    return(
        <>
            <div id="game-menu-window">

                <div id="menu-title">
                    <h2>Menu</h2>    
                </div>
                <div id="menu-buttons-container">
                    <button onClick={handleStartClick}>start</button>
                </div>
            </div>
        </>
    )
}

export default GameMenu;