// router.tsx
import { createBrowserRouter } from "react-router";
import App from "./App";
import { homeLoader } from "./loaders/homeLoader";
import { HomeView } from "./views";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Ett fel inträffade...</div>,
    children: [
      {
        index: true,
        element: <HomeView />,
        loader: homeLoader,
      },
    ],
  },
]);
