import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import CoffeeDetail from "../pages/CoffeeDetail/CoffeeDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/coffee/detail/:id",
        element: <CoffeeDetail />,
      },
    ],
  },
]);

export default router;
