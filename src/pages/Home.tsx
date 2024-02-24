import React from "react";
import ProductTitle from "../components/ProductTitle";
import classes from "./Home.module.scss";
import headPhones from "../assets/Figma/hero-section/hero-headphones.png";
import Button from "../components/UI/Button/Button";
import ProductCategories from "../components/ProductCategories/ProductCategories";
import featuredSpeakers from "../assets/home/desktop/image-speaker-zx9.png";
import EarphoneThirdAd from "../components/EarphoneThirdAd/EarphoneThirdAd";
import PersonCardAd from "../components/PersonCardAd/PersonCardAd";
import Footer from "../components/Footer/Footer";
import {
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import { Product } from "../interfaces/interfaces";
const HomePage = () => {
  const products: any = useRouteLoaderData("root") as Product[];
  const navigate = useNavigate();
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
            <h1>{products[4].name}</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button
              onClick={() => {
                navigate(`./${products[4].category}/${products[4].id}`);
              }}
              style={"prodCatButton"}
            >
              SEE PRODUCT
            </Button>
          </div>
        </div>
        {/* Second ad Prod 2 */}
        <div className={classes.secondAd}>
          <div className={classes.productDesc}>
            <h4>{products[3].name}</h4>
            <Button
              onClick={() => {
                navigate(`./${products[3].category}/${products[3].id}`);
              }}
              style={"transparent"}
            >
              SEE PRODUCT
            </Button>
          </div>
        </div>
        {/* Third Ad Prod 3 */}
        <EarphoneThirdAd prod={products[0]} />
        <PersonCardAd />
      </div>
    </>
  );
};

export default HomePage;
