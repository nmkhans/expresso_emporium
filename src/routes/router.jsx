import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";

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
    ],
  },
]);

export default router;
