import App from "./App";
import LandingPage from "./components/landingPageComponents/LandingPage";
import GamePage from "./components/gamePageComponents/gamePage/GamePage";
import RouterErrorPage from "./RouterErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/landing-page", element: <LandingPage /> },
      { index: true, element: <LandingPage /> },
      { path: "/game-page", element: <GamePage /> },
    ],
    errorElement: <RouterErrorPage />,
  },
];

export default routes;
