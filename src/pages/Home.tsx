import React from "react";
import MainNavigation from "../components/MainNavigation";
import ProductTitle from "../components/ProductTitle";
import classes from "./Home.module.scss";
const HomePage = () => {
  return (
    <div className={classes.hero}>
      <MainNavigation />
      <ProductTitle />
    </div>
  );
};

export default HomePage;
