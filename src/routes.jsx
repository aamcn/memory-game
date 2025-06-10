import App from "./App";
import LandingPage from "./pages/LandingPage";
import GamePage from "./pages/GamePage";
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
