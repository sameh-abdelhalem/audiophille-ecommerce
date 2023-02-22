import path from "path";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RouterLayout from "./pages/Root";
import "./sass/_base.scss";
import React from "react";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
