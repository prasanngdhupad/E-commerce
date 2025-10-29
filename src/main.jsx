import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import OrderTracking from "./Pages/OrderTracking.jsx";
import HelpCenter from "./Pages/HelpCenter.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/OrderTracking",
        element: <OrderTracking/>
      },
      {
        path:"/HelpCenter",
        element:<HelpCenter/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}>
    <App />
  </RouterProvider>
);
