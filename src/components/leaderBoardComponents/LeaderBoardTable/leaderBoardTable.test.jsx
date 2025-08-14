import LeaderBoardTable from "./LeaderBoardTable";
import { render, screen } from "@testing-library/react";
import { describe, it, expect} from "vitest";
import React from "react";

const mockProps = [
        { id: 3, name: 'mockPlayerOne', time: "9 seconds" },
        { id: 4, name: "mockPlayerTwo", time: "15 seconds" },
    ]

describe("LeaderBoardTable", () => {

    it("renders Leader Board component", () => {
      render(<LeaderBoardTable sortedLeaderBoardData={mockProps} />);
      expect(screen.getByTestId("leaderboard-container")).toBeInTheDocument();
    });

    it("renders the table with correct headers", () => {
      render(<LeaderBoardTable sortedLeaderBoardData={mockProps} />);
      expect(screen.getByLabelText("Leaderboard Position")).toBeInTheDocument();
      expect(screen.getByLabelText("Player Name")).toBeInTheDocument();
      expect(screen.getByLabelText("Finish Time")).toBeInTheDocument();
    });

    it("handles empty state", () => {
      render(<LeaderBoardTable sortedLeaderBoardData={[]} />);
      expect(screen.getByText("No data available")).toBeInTheDocument();
    });

    describe("Renders with correct table row data", () => {

      it("renders table row 1 with first entry from mockProps", () => {
        render(<LeaderBoardTable sortedLeaderBoardData={mockProps} />);
        const entryRow = screen.getByTestId("row-1");
        expect(entryRow.firstChild).toHaveTextContent("1");
        expect(entryRow.firstChild.nextSibling).toHaveTextContent("mockPlayerOne");
        expect(entryRow.firstChild.nextSibling.nextSibling).toHaveTextContent("9 seconds");
      });

    it("renders table row 2 with second entry from mockProps", () => {
        render(<LeaderBoardTable sortedLeaderBoardData={mockProps} />);
        const entryRowTwo = screen.getByTestId("row-2");
        expect(entryRowTwo.firstChild).toHaveTextContent("2");
        expect(entryRowTwo.firstChild.nextSibling).toHaveTextContent("mockPlayerTwo");
        expect(entryRowTwo.firstChild.nextSibling.nextSibling).toHaveTextContent("15 seconds");
      });
    });

});
