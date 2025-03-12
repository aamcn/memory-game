import App from "./App";
import LandingPage from "./components/LandingPage";
import GameDisplay from "./components/GameDisplay";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
          { path: "landing-page", element: <LandingPage /> },
          { index: true, element: <LandingPage /> },
          { path: "game-display", element: <GameDisplay/> },
        ],
      },
];

export default routes;