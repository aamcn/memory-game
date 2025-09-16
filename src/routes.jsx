import App from "./App";
import LandingPage from "./components/landingPageComponents/LandingPage";
import GamePage from "./components/gamePageComponents/gamePage/GamePage";
import RouterErrorPage from "./RouterErrorPage";
import LeaderBoardPage from "./components/leaderBoardComponents/leaderBoardPage/LeaderBoardPage";
import React from "react";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/memory-game/landing-page", element: <LandingPage /> },
      { index: true, element: <LandingPage /> },
      { path: "/memory-game/game-page", element: <GamePage /> },
      { path: "/memory-game/leader-board", element: <LeaderBoardPage /> },
    ],
    errorElement: <RouterErrorPage />,
  },
];

export default routes;
