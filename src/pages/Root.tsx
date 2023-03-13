import React from "react";
import classes from "./Root.module.scss";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import SecondaryNavigation from "../components/SecondaryNavigation/SecondaryNavigation";
const RouterLayout = () => {
  return (
    <>
      <SecondaryNavigation />
      <main className={classes.content}>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
};

export default RouterLayout;
