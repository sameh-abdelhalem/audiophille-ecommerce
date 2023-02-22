import React from "react";
import classes from "./Root.module.scss";
import { Outlet } from "react-router-dom";
const RouterLayout = () => {
  return (
    <>
      <main className={classes.content}>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default RouterLayout;
