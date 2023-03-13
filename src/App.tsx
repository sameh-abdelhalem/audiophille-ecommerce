import path from "path";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RouterLayout from "./pages/Root";
import "./sass/_base.scss";
import React from "react";
import HeadphonesPage from "./pages/Headphones";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          element: <HeadphonesPage />,
          path: "/headphones",
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
