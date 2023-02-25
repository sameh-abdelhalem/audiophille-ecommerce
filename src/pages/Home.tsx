import React from "react";
import MainNavigation from "../components/MainNavigation";
import ProductTitle from "../components/ProductTitle";
import classes from "./Home.module.scss";
import headPhones from "../assets/Figma/hero-section/hero-headphones.png";
import Button from "../components/Button/Button";
const HomePage = () => {
  return (
    <div className={classes.hero}>
      <img src={headPhones} className={classes.headphones} />
      <MainNavigation />

      <div className={classes.productContainer}>
        <div className={classes.productDesc}>
          <p className={classes.newProd}>NEW PRODUCT</p>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button style="asdf">SEE PRODUCT</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
