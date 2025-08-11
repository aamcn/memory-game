
import Button from "./Button";
import { render, screen } from "@testing-library/react";
import { it, describe, expect, vi} from "vitest";
import React from "react";

describe("Button Component", () => {    

    it("renders the button with correct text", () => {
        const onClick = vi.fn();
        render(<Button buttonText="Click Me" onClick={onClick} />);
        const buttonElement = screen.getByRole("button", { name: /click me/i });
        expect(buttonElement).toBeInTheDocument();
    });

    it("Renders with the correct props", () => {
        const onClick = vi.fn();
        render(<Button buttonText="Click Me" buttonClass="mockClass" onClick={onClick} buttonType="mockType"  buttonId="10"/>);
        const buttonElement = screen.getByRole("button", { name: /click me/i });
        expect(buttonElement).toHaveAttribute("type", "mockType");
        expect(buttonElement).toHaveAttribute("id", "10");
        expect(buttonElement.textContent).toBe("Click Me");
        expect(buttonElement).toHaveClass("mockClass");
        expect(buttonElement).toHaveAttribute("aria-label", "Click Me");
    });

    it("calls onClick when clicked", () => { 
        const onClick = vi.fn();
        render(<Button buttonText="Click Me" buttonClass="mockClass" onClick={onClick} buttonType="mockType"  buttonId="10"/>);
        const buttonElement = screen.getByRole("button", { name: /click me/i });
        buttonElement.click();
        expect(onClick).toHaveBeenCalled();
    });
    
});