// router.tsx
import { createBrowserRouter } from "react-router";
import App from "./App";
import { homeLoader } from "./loaders/homeLoader";
import { CocktailView, HomeView, SearchView } from "./views";
import { cocktailLoader } from "./loaders/cocktailLoader";
import { searchLoader } from "./loaders/searchLoader";

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
      {
        path: "search/",
        element: <SearchView />,
        loader: searchLoader,
      },
    ],
  },
]);
