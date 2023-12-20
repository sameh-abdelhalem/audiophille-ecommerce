import React from "react";
import classes from "./ProductAd.module.scss";
import prodCatImg from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import { log } from "console";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const DUMMYCATPRODS: any = [
  {
    prodId: 13,
    prodTitle: "XX99 Mark II Headphones",
    prodDesc:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    prodImg: prodCatImg,
    isNew: true,
  },
  {
    prodId: 12,
    prodTitle: "XX99 Mark II Headphones",
    prodDesc:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    prodImg: prodCatImg,
    isNew: false,
  },
];
const ProductAd = () => {
  let isInverted = false;
  return DUMMYCATPRODS.map((prod: any) =>
    isInverted ? (
      <>
        <div className={classes.prodAdContainerTablet}>
          {
            <div className={classes.prodImageContainer}>
              <img src={prod.prodImg} alt="" />
            </div>
          }
          {(isInverted = !isInverted)}

          <div className={classes.prodDescBtnContainer}>
            {prod.isNew && <p className={classes.newProd}>NEW PRODUCT</p>}
            <div className={classes.adDesc}>
              <h2>{prod.prodTitle}</h2>
              <p>{prod.prodDesc}</p>
              <Link to={"prod"}>
                <Button onClick={null} style="primary">
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.prodAdContainerDesktop}>
          {(isInverted = !isInverted)}

          <div className={classes.prodDescContainer}>
            {prod.isNew && <p className={classes.newProd}>NEW PRODUCT</p>}
            <div className={classes.adDesc}>
              <h2>{prod.prodTitle}</h2>
              <p>{prod.prodDesc}</p>

              <Link to={"prod"}>
                <Button onClick={null} style="primary">
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
          {
            <div className={classes.prodImageContainer}>
              <img src={prod.prodImg} alt="" />
            </div>
          }
        </div>
      </>
    ) : (
      <div className={classes.prodAdContainer}>
        {
          <div className={classes.prodImageContainer}>
            <img src={prod.prodImg} alt="" />
          </div>
        }
        {(isInverted = !isInverted)}

        <div className={classes.prodDescBtnContainer}>
          {prod.isNew && <p className={classes.newProd}>NEW PRODUCT</p>}
          <div className={classes.adDesc}>
            <h2>{prod.prodTitle}</h2>
            <p>{prod.prodDesc}</p>
            <Link to={"prod"}>
              <Button onClick={null} style="primary">
                SEE PRODUCT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductAd;
