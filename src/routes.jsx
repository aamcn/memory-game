import App from "./App";
import LandingPage from "./components/landingPageComponents/LandingPage";
import GamePage from "./components/gamePageComponents/gamePage/GamePage";
import RouterErrorPage from "./RouterErrorPage";
import LeaderBoard from "./components/leaderBoardComponents/leaderBoard/LeaderBoard";
import React from "react";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/landing-page", element: <LandingPage /> },
      { index: true, element: <LandingPage /> },
      { path: "/game-page", element: <GamePage /> },
      {path: "leader-board", element: <LeaderBoard />}
    ],
    errorElement: <RouterErrorPage />,
  },
];

export default routes;
