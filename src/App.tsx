import path from "path";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RouterLayout from "./pages/Root";
import "./sass/_base.scss";
import React from "react";
import CategoryPage from "./pages/Category";
import ProductDetailsPage from "./pages/ProductDetails";
import CheckoutPage from "./pages/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./pages/Error";
import { log } from "console";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      id: "root",
      errorElement: <ErrorPage />,
      loader: async () => {
        const response = await fetch(
          "https://audiophille-react-project-default-rtdb.firebaseio.com/.json"
        );
        if (!response.ok) {
        } else {
          const resData = await response.json();
          return resData;
        }
      },

      children: [
        { index: true, element: <HomePage /> },

        {
          path: "/headphones",
          element: <CategoryPage />,
        },
        {
          path: "headphones/:prodId",
          id: "prod",
          element: <ProductDetailsPage />,
          loader: async ({ params }) => {
            const response = await fetch(
              `https://audiophille-react-project-default-rtdb.firebaseio.com/${params.prodId}/.json`
            );
            if (!response.ok) {
            } else {
              console.log(params.prodId);
              const resData = await response.json();
              return resData;
            }
          },
        },
        {
          path: "/speakers",

          element: <CategoryPage />,
        },
        {
          path: "speakers/:prodId",
          element: <ProductDetailsPage />,
          loader: async ({ params }) => {
            const response = await fetch(
              `https://audiophille-react-project-default-rtdb.firebaseio.com/${params.prodId}/.json`
            );
            if (!response.ok) {
            } else {
              console.log(params.prodId);
              const resData = await response.json();
              return resData;
            }
          },
        },
        {
          path: "/earphones",
          element: <CategoryPage />,
        },
        {
          path: "earphones/:prodId",

          element: <ProductDetailsPage />,
          loader: async ({ params }) => {
            const response = await fetch(
              `https://audiophille-react-project-default-rtdb.firebaseio.com/${params.prodId}/.json`
            );
            if (!response.ok) {
            } else {
              console.log(params.prodId);
              const resData = await response.json();
              return resData;
            }
          },
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
