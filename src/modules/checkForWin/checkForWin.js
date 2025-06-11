export function checkForWin(currentScore, cardTotal, setGameWon) {
  if (currentScore === cardTotal) {
    setGameWon(true);
  }
}
