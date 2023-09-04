import React from "react";
import MainNavigation from "../components/MainNavigation";
import ProductTitle from "../components/ProductTitle";
import classes from "./Home.module.scss";
import headPhones from "../assets/Figma/hero-section/hero-headphones.png";
import Button from "../components/UI/Button/Button";
import ProductCategories from "../components/ProductCategories/ProductCategories";
import featuredSpeakers from "../assets/home/desktop/image-speaker-zx9.png";
import EarphoneThirdAd from "../components/EarphoneThirdAd/EarphoneThirdAd";
import PersonCardAd from "../components/PersonCardAd/PersonCardAd";
import Footer from "../components/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <div className={classes.content}>
        <ProductCategories />

        {/* featured speakers / first ad */}
        <div className={classes.featuredProd}>
          <div className={classes.cropContainer}>
            <img
              src={featuredSpeakers}
              className={classes.featuredSpeakers}
              alt=""
            />
          </div>
          <div className={classes.productDesc}>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button onClick={null} style={"prodCatButton"}>
              SEE PRODUCT
            </Button>
          </div>
        </div>
        {/* Second ad Prod 2 */}
        <div className={classes.secondAd}>
          <div className={classes.productDesc}>
            <h4>ZX7 SPEAKER</h4>
            <Button onClick={null} style={"transparent"}>
              SEE PRODUCT
            </Button>
          </div>
        </div>
        {/* Third Ad Prod 3 */}
        <EarphoneThirdAd />
        <PersonCardAd />
      </div>
    </>
  );
};

export default HomePage;
