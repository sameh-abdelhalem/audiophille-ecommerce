import React from "react";
import Button from "./Button";
import classes from "./ProductTitle.module.scss";
const ProductTitle = () => {
  return (
    <div className={classes.productContainer}>
      <div className={classes.productDesc}>
        <p>NEW PRODUCT</p>
        <h1>Product description</h1>
        <p>Product description Product description Product description</p>
        <Button style="asdf">SEE PRODUCT</Button>
      </div>
    </div>
  );
};

export default ProductTitle;
