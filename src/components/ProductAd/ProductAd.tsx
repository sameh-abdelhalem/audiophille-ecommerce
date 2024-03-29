import React from "react";
import classes from "./ProductAd.module.scss";
import prodCatImg from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import Button from "../UI/Button/Button";
import {
  Link,
  useLoaderData,
  useLocation,
  useRouteLoaderData,
} from "react-router-dom";
import { Product } from "../../interfaces/interfaces";
import Skeleton from "react-loading-skeleton";

const ProductAd = () => {
  const currentPath = useLocation();
  const prods: any = useRouteLoaderData("root");
  let isInverted = false;
  if (prods.error) {
    return <p>{prods.message}</p>;
  }

  return prods
    .filter((prod: Product) => {
      return prod.category == currentPath.pathname.substring(1);
    })
    .map((prod: Product) =>
      isInverted
        ? (
            <div key={prod.id}>
              <div className={classes.prodAdContainerTablet}>
                {
                  <div className={classes.prodImageContainer}>
                    {<img src={prod.categoryImage.desktop} alt="" /> || (
                      <Skeleton />
                    )}
                  </div>
                }

                <div className={classes.prodDescBtnContainer}>
                  {prod.new && <p className={classes.newProd}>NEW PRODUCT</p>}
                  <div className={classes.adDesc}>
                    <h2>{prod.name}</h2>
                    <p>{prod.description}</p>
                    <Link to={`${prod.id}`}>
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
                  {prod.new && <p className={classes.newProd}>NEW PRODUCT</p>}
                  <div className={classes.adDesc}>
                    <h2>{prod.name}</h2>
                    <p>{prod.description}</p>

                    <Link to={`${prod.id}`}>
                      <Button onClick={null} style="primary">
                        SEE PRODUCT
                      </Button>
                    </Link>
                  </div>
                </div>
                {
                  <div className={classes.prodImageContainer}>
                    {<img src={prod.categoryImage.desktop} alt="" /> || (
                      <Skeleton />
                    )}
                  </div>
                }
              </div>
            </div>
          ) || <Skeleton />
        : (
            <div className={classes.prodAdContainer} key={prod.id}>
              {
                <div className={classes.prodImageContainer}>
                  {<img src={prod.categoryImage.desktop} alt="" /> || (
                    <Skeleton />
                  )}
                </div>
              }
              {(isInverted = !isInverted)}

              <div className={classes.prodDescBtnContainer}>
                {prod.new && <p className={classes.newProd}>NEW PRODUCT</p>}
                <div className={classes.adDesc}>
                  <h2>{prod.name}</h2>
                  <p>{prod.description}</p>
                  <Link to={`${prod.id}`}>
                    <Button onClick={null} style="primary">
                      SEE PRODUCT
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ) || <Skeleton />
    );
};

export default ProductAd;
