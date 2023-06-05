import React from "react";
import ProductCategories from "../components/ProductCategories/ProductCategories";
import PersonCardAd from "../components/PersonCardAd/PersonCardAd";
import { Link, useParams } from "react-router-dom";
import classes from "./ProductDetails.module.scss";
import prodCatImg from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import Button from "../components/Button/Button";
const DUMMYPRODUCT = {
  prodId: 1,
  prodTitle: "XX99 Mark II Headphones",
  isNew: true,
  prodDesc:
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  prodPrice: 2.999,
  prodFeatures: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

  The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
  prodBox: [
    {
      item: "Headphone Unit",

      quantity: 1,
    },
    {
      item: "Replacement Earcups",

      quantity: 2,
    },
    {
      item: "User Manual",

      quantity: 1,
    },
    {
      item: "3.5mm 5m Audio Cable",

      quantity: 1,
    },
    {
      item: "Travel Bag",

      quantity: 1,
    },
  ],
  prodImg: prodCatImg,
};

const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <div>
      <Link to={"/"}>Go Back</Link>
      <div className={classes.prodAdContainer}>
        {<img src={DUMMYPRODUCT.prodImg} alt="" />}

        <div>
          {DUMMYPRODUCT.isNew && <p className={classes.newProd}>NEW PRODUCT</p>}
          <div className={classes.adDesc}>
            <h2>{DUMMYPRODUCT.prodTitle}</h2>
            <p>{DUMMYPRODUCT.prodDesc}</p>

            <div className={classes.addToCart}>
              <div className={classes.quantity}>
                <div className={classes.amount}>-</div>
                <div>1</div>
                <div className={classes.amount}>+</div>
              </div>
              <Button style="primary">ADD TO CART</Button>
            </div>
          </div>
        </div>
      </div>

      <ProductCategories />
      <PersonCardAd />
    </div>
  );
};

export default ProductDetailsPage;
