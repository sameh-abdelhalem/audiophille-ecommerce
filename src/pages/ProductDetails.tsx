import React from "react";
import ProductCategories from "../components/ProductCategories/ProductCategories";
import PersonCardAd from "../components/PersonCardAd/PersonCardAd";
import { Link, useParams } from "react-router-dom";
import classes from "./ProductDetails.module.scss";
import prodCatImg from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import Button from "../components/Button/Button";
import imgGal1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import imgGal2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import imgGal3 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import { url } from "inspector";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
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
  prodImages: { mainImage: imgGal3, firstImage: imgGal1, secImage: imgGal2 },
};

const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <div className={classes.prodMainContainer}>
      <Link to={"/"} className={classes.returnLink}>
        Go Back
      </Link>
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
              <Button onClick={null} style="primary">
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.featuresContainer}>
        <div className={classes.features}>
          <h3>Features</h3>
          <p>{DUMMYPRODUCT.prodFeatures}</p>
        </div>
        <div className={classes.boxContent}>
          <h3>in the box</h3>
          <ul>
            {DUMMYPRODUCT.prodBox.map((item) => {
              return (
                <li key={item.item}>
                  <span className={classes.quantity}>{item.quantity}x</span>{" "}
                  {item.item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={classes.prodImagesContainer}>
        <div className={classes.secImages}>
          <img src={DUMMYPRODUCT.prodImages.firstImage} alt="" />
          <img src={DUMMYPRODUCT.prodImages.secImage} alt="" />
        </div>
        <div className={classes.mainImage}>
          <img src={DUMMYPRODUCT.prodImages.mainImage} alt="" />
        </div>
      </div>
      <RelatedProducts />
      <ProductCategories />
      <PersonCardAd />
    </div>
  );
};

export default ProductDetailsPage;
