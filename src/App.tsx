import path from "path";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RouterLayout from "./pages/Root";
import "./sass/_base.scss";
import React from "react";
import CategoryPage from "./pages/Category";
import ProductDetailsPage from "./pages/ProductDetails";
import CheckoutPage from "./pages/Checkout";
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
        {
          path: "checkout",
          element: <CheckoutPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
