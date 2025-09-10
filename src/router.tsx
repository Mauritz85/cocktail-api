// router.tsx
import { createBrowserRouter } from "react-router";
import App from "./App";
import { homeLoader } from "./loaders/homeLoader";
import { CocktailView, HomeView } from "./views";
import { cocktailLoader } from "./loaders/cocktailLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Ett fel inträffade...</div>,
    HydrateFallback: () => null,
    children: [
      {
        index: true,
        element: <HomeView />,
        loader: homeLoader,
      },
      {
        path: "cocktail/:Id",
        element: <CocktailView />,
        loader: cocktailLoader,
      },
    ],
  },
]);
