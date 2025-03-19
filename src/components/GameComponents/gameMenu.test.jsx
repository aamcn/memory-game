import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from "@testing-library/user-event";

import GameMenu from './GameMenu';

describe('Easy Button', () => {
  it('Should render "Easy Button"', () => {
    
    render(<GameMenu  cardTotal={3}/>);
    
    const button = screen.getByRole("button", { name: "Easy" });
    expect(button).toBeInTheDocument();

  });


    it("Should call the onClick function when 'Easy Button' is clicked", async () => {
        const setCardTotal = vi.fn()
        const user = userEvent.setup()
        render(<GameMenu setCardTotal={setCardTotal}/>);
        
        const easyButton = screen.getByRole("button", { name: "Easy" });
        
        await user.click(easyButton);
    
        expect(setCardTotal).toHaveBeenCalled();
      });

    it("Should change difficulty text to '3 Cards' when 'Easy button' is clicked", async () => {
        let cardTotal = 10
        const setCardTotal = () => {cardTotal = 3}
        const onClick = setCardTotal()
        const user = userEvent.setup()
        render(<GameMenu setCardTotal={setCardTotal} onClick={onClick} cardTotal={cardTotal}/>);
        
        const easyButton = screen.getByRole("button", { name: "Easy" });
        const difficultyText = screen.getByTestId("difficultyText")
        await user.click(easyButton);
        
        expect(difficultyText.textContent).not.toStrictEqual("10 Cards")
        expect(difficultyText.textContent).toStrictEqual("3 Cards");
    });

});

describe('Medium Button', () => {
    it('Should render "Medium Button"', () => {
      
      render(<GameMenu  />);
        const mediumButton = screen.getByRole("button", { name: "Medium" });
        expect(mediumButton).toBeInTheDocument();
  
    });

    it("Should call the onClick function when 'Medium Button' is clicked", async () => {
        const setCardTotal = vi.fn()
        const user = userEvent.setup()
        
        render(<GameMenu setCardTotal={setCardTotal}  />);
            const mediumButton = screen.getByRole("button", { name: "Medium" });
            await user.click(mediumButton);
            expect(setCardTotal).toHaveBeenCalled();
      });

    
    it("Should change difficulty text to '6 Cards' when 'Easy button' is clicked", async () => {
        let cardTotal = 10
        const setCardTotal = () => {cardTotal = 6}
        const onClick = setCardTotal()
        const user = userEvent.setup()
        render(<GameMenu setCardTotal={setCardTotal} onClick={onClick} cardTotal={cardTotal}/>);
        
        const mediumButton = screen.getByRole("button", { name: "Medium" });
        const difficultyText = screen.getByTestId("difficultyText")
        await user.click(mediumButton);

        expect(difficultyText.textContent).not.toStrictEqual("10 Cards")
        expect(difficultyText.textContent).toStrictEqual("6 Cards");
    });
})

describe('Hard Button', () => {
    it('Should render "Hard Button"', () => {
      
      render(<GameMenu  />);
        const hardButton = screen.getByRole("button", { name: "Hard" });
        expect(hardButton).toBeInTheDocument();
  
    });

    it("Should call the onClick function when 'Hard Button' is clicked", async () => {
        const setCardTotal = vi.fn()
        const user = userEvent.setup()
        
        render(<GameMenu setCardTotal={setCardTotal}  />);
            const hardButton = screen.getByRole("button", { name: "Hard" });
            await user.click(hardButton);
            expect(setCardTotal).toHaveBeenCalled();
      });

    
    it("Should change difficulty text to '9 Cards' when 'Hard button' is clicked", async () => {
        let cardTotal = 10
        const setCardTotal = () => {cardTotal = 9}
        const onClick = setCardTotal()
        const user = userEvent.setup()
        
        render(<GameMenu setCardTotal={setCardTotal} onClick={onClick} cardTotal={cardTotal}/>);
            const hardButton = screen.getByRole("button", { name: "Hard" });
            const difficultyText = screen.getByTestId("difficultyText")
            await user.click(hardButton);
    
        expect(difficultyText.textContent).not.toStrictEqual("10 Cards")
        expect(difficultyText.textContent).toStrictEqual("9 Cards");
    });
})