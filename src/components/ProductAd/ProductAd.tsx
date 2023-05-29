import React from "react";
import classes from "./ProductAd.module.scss";
const ProductAd: React.FC<{
  isNew: boolean;
}> = (props) => {
  return (
    <div className={classes.prodAdContainer}>
      <div>
        {props.isNew && <p className={classes.newProd}>NEW PRODUCT</p>}
        <div className={classes.adDesc}>
          <h2>
            Bringing you the <span className={classes.primaryWord}>best</span>{" "}
            audio gear
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      {/* <img src={ProdImg} alt="" /> */}
    </div>
  );
};

export default ProductAd;
