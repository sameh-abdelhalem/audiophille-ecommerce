import React from "react";
import classes from "./PersonCardAd.module.scss";
import personImg from "../../assets/Figma/hero-section/personAd.png";
const PersonCardAd = () => {
  return (
    <div className={classes.personAdContainer}>
      <div className={classes.adDesc}>
        <h2>
          Bringing you the <span className={classes.primaryWord}>best</span>{" "}
          audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={personImg} alt="" />
    </div>
  );
};

export default PersonCardAd;
