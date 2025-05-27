import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import CoffeeDetail from "../pages/CoffeeDetail/CoffeeDetail";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";

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
      {
        path: "/coffee/update/:id",
        element: <UpdateCoffee />,
      },
    ],
  },
]);

export default router;
