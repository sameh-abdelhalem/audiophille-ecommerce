import path from "path";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RouterLayout from "./pages/Root";
import "./sass/_base.scss";
import React from "react";
import CategoryPage from "./pages/Category";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          path: "/headphones",
          element: <CategoryPage />,
        },
        {
          path: "/speakers",
          element: <CategoryPage />,
        },
        {
          path: "/earphones",
          element: <CategoryPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
