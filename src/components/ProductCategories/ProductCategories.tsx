import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductCategories.module.scss";
import headphoneCategory from "../../assets/Figma/hero-section/headphone-category.png";
import speakersCategory from "../../assets/Figma/hero-section/speakers-category.png";
import earphonesCategory from "../../assets/Figma/hero-section/earphones-category.png";

const ProductCategories = () => {
  return (
    <div className={classes.products}>
      <div className={classes.product}>
        <img src={headphoneCategory} />
        <h6>Headphones</h6>
        <Link to={"/headphones"}>
          <span className={classes.prodLink}>Shop</span>
        </Link>
      </div>
      <div className={classes.product}>
        <img src={speakersCategory} alt="" />
        <h6>Speakers</h6>
        <Link to={"/headphones"}>Shop</Link>
      </div>
      <div className={classes.product}>
        <img src={earphonesCategory} alt="" />
        <h6>Earphones</h6>
        <Link to={"/headphones"}>Shop</Link>
      </div>
    </div>
  );
};

export default ProductCategories;
