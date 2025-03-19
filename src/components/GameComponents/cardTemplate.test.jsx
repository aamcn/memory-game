import { describe, it, vite, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen  } from "@testing-library/react";
import CardTemplate from "./CardTemplate";

describe('Card Element', () => {

    it('Should render a card displayin the arguments from the pokemonCardDetails prop', () => {
        const pokemonCardDetails = {
            id: 1,
            name: 'Tony', 
            type: 'Grass',
            imageUrl: 'https://fakeimg.pl/100/', 
            isClicked: false, 
        }

        render(<CardTemplate pokemonCardDetails={pokemonCardDetails} />)
        
        const renderedName = screen.getByTestId("card-name")
        const renderedImage = screen.getByTestId("card-image")

        expect(renderedName.textContent).toBe('Tony')
        expect(renderedImage.src).toBe('https://fakeimg.pl/100/')
        
    })
})