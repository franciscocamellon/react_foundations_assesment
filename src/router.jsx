import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/home";
import Details from "./pages/hotelDetails/details";
import Favorites from "./pages/favorites/favorites";

export const pagesRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);
