import React from "react";
import classes from "./ProductAd.module.scss";
import prodCatImg from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import { log } from "console";

const DUMMYCATPRODS: any = [
  {
    prodId: "13",
    prodTitle: "XX99 Mark II Headphones",
    prodDesc:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    prodImg: prodCatImg,
    isNew: true,
  },
  {
    prodId: "13",
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
      <div className={classes.prodAdContainer}>
        {(isInverted = !isInverted)}

        <div>
          {prod.isNew && <p className={classes.newProd}>NEW PRODUCT</p>}
          <div className={classes.adDesc}>
            <h2>{prod.prodTitle}</h2>
            <p>{prod.prodDesc}</p>
          </div>
        </div>
        {<img src={prod.prodImg} alt="" />}
      </div>
    ) : (
      <div className={classes.prodAdContainer}>
        {<img src={prod.prodImg} alt="" />}
        {(isInverted = !isInverted)}

        <div>
          {prod.isNew && <p className={classes.newProd}>NEW PRODUCT</p>}
          <div className={classes.adDesc}>
            <h2>{prod.prodTitle}</h2>
            <p>{prod.prodDesc}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductAd;
