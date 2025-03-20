import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import GameWonPopUp from "./GameWonPopUp";

describe('GameWonPopUp Component', () => {

    it('Should render GameWonPopUp', () => {
        render(<GameWonPopUp  />);
    
        const gameWonHeading = screen.getByRole("heading", { name: "You Did It!" });
        console.log(gameWonHeading.textContent);
        expect(gameWonHeading).toBeInTheDocument();
      });

})

describe('New Game Button', () => {

    it('Should render "New Game?" button', () => {
        render(<GameWonPopUp />)
        const  newGameButton = screen.getByRole("button", {name: "New Game?"});
        expect(newGameButton).toBeInTheDocument();
    })

    it('Should change "gameWon" and "gameStarted" to "true" when clicked', async () => {
        
        const user = userEvent.setup();
        let gameStarted = false;
        let gameWon = false;
        const setGameStarted = () => {gameStarted = true}
        const setGameWon = () => {gameWon = true}
        
        render(<GameWonPopUp setGameWon={setGameWon} setGameStarted={setGameStarted} gameWon={gameWon} gameStarted={gameStarted}/>)
            const newGameButton = screen.getByRole("button", {name: "New Game?"});
            await user.click(newGameButton);
        
        expect(gameWon).toBe(true);
        expect(gameStarted).toBe(true)
    })

})