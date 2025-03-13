import Button from "../../elements/Button";

function GameMenu({ handleStartClick, cardTotal, setCardTotal}) {


  const handleClickDifficulty = (event) => {
    setCardTotal(parseInt(event.target.value))
  }

  return (
    <>
      <div id="game-menu-window">
        <div id="menu-title">
          <h2>Menu</h2>
        </div>
        <div>
        <p>Choose Your Difficulty</p>
        <p>{cardTotal} cards</p>
        
          <button onClick={handleClickDifficulty} value={3}>Easy</button>
          <button onClick={handleClickDifficulty} value={9}>Medium</button>
          <button onClick={handleClickDifficulty} value={16}>Hard</button>
        </div>
        <div id="menu-buttons-container">
          <button onClick={handleStartClick}>start</button>
        </div>
      </div>
    </>
  );
}

export default GameMenu;
