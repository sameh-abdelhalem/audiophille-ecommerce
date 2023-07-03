import React from "react";
import Button from "../Button/Button";
import classes from "./EarphoneThirdAd.module.scss";
import thirdAd from "../../assets/home/desktop/image-earphones-yx1.jpg";

const EarphoneThirdAd = () => {
  return (
    <div className={classes.thirdAd}>
      <img src={thirdAd} alt="" />
      <div className={classes.productDesc}>
        <div className={classes.titleButton}>
          <h4>YX1 EARPHONES</h4>
          <Button style={"transparent"} onClick={null}>
            SEE PRODUCT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EarphoneThirdAd;
