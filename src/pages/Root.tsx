import React from "react";
import classes from "./Root.module.scss";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import SecondaryNavigation from "../components/SecondaryNavigation/SecondaryNavigation";
const RouterLayout = () => {
  const currentPath = useLocation();
  return (
    <>
      <SecondaryNavigation />

      <main
        className={`${classes.content} ${
          currentPath.pathname.includes("checkout") ? classes.checkout : ""
        }`}
      >
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
};

export default RouterLayout;
