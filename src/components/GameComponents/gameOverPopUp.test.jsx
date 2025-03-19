import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import GameOverPopUp from "./GameOverPopUp";


describe('GameOverPopUp Component', () => {

    it('Should render GameOverPopUp', () => {
        render(<GameOverPopUp  />);
    
        const GameOverheading = screen.getByRole("heading", { name: "Game Over" });
        console.log(GameOverheading.textContent);
        expect(GameOverheading).toBeInTheDocument();
      });

    })


describe('Retry Button', () => {

    it('Should render "Retry" button', () => {
        render(<GameOverPopUp />)
    
        const retryButton = screen.getByRole("button", {name: "Retry?"});
        expect(retryButton).toBeInTheDocument();
    })

    

})
