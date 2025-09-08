export function checkForWin(currentScore, cardTotal, setGameWon) {
  if (typeof currentScore !== "number" || typeof cardTotal !== "number") {
    throw new Error(
      "Invalid input, both currentScore and cardTotal must be numbers",
    );
  }

  if (currentScore === cardTotal) {
    setGameWon(true);
  }
}
