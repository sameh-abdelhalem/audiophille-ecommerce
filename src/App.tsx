import path from "path";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RouterLayout from "./pages/Root";
import "./sass/_base.scss";
import React from "react";
import CategoryPage from "./pages/Category";
import ProductDetailsPage from "./pages/ProductDetails";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/headphones",
          element: <CategoryPage />,
        },
        {
          path: "headphones/:prodId",

          element: <ProductDetailsPage />,
        },
        {
          path: "/speakers",
          element: <CategoryPage />,
        },
        {
          path: "speakers/:prodId",

          element: <ProductDetailsPage />,
        },
        {
          path: "/earphones",
          element: <CategoryPage />,
        },
        {
          path: "earphones/:prodId",

          element: <ProductDetailsPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
