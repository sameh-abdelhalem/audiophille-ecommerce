import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductCategories.module.scss";
import headphoneCategory from "../../assets/Figma/hero-section/headphone-category.png";
import speakersCategory from "../../assets/Figma/hero-section/speakers-icon.png";
import earphonesCategory from "../../assets/Figma/hero-section/earphones-category.png";

const ProductCategories = () => {
  return (
    <div className={classes.products}>
      <div className={classes.product}>
        <Link to={"/headphones"}>
          <img src={headphoneCategory} />
          <h6>Headphones</h6>
          <span className={classes.prodLink}>Shop</span>
        </Link>
      </div>
      <div className={classes.product}>
        <Link to={"/speakers"}>
          <img src={speakersCategory} className={classes.speakers} alt="" />
          <h6>Speakers</h6>
          <span className={classes.prodLink}>Shop</span>
        </Link>
      </div>
      <div className={classes.product}>
        <Link to={"/earphones"}>
          <img src={earphonesCategory} alt="" />
          <h6>Earphones</h6>
          <span className={classes.prodLink}>Shop</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCategories;
