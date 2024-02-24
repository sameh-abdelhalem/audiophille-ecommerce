import CartProd from "./CartProd";
import classes from "./CheckoutSummary.module.scss";
import headphones from "../../assets/cart/image-xx99-mark-one-headphones.jpg";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import OrderConfirmation from "./OrderConfiramtion";
import { useSelector } from "react-redux";
const CheckoutSummary = () => {
  const cartProducts = useSelector((state: any) => state.cart.products);
  const [toggleConfirmation, setToggleConfirmation] = useState(false);
  const showConfirmationHandler = () => {
    setToggleConfirmation((prevState) => !prevState);
  };
  const totalPrice = Number(
    cartProducts.reduce(
      (prod: any, currProd: any) =>
        prod + currProd.prodQuantity * currProd.price,
      0
    )
  );

  const vat = Number((totalPrice * 20) / 100);
  const shipping = 50;
  const totalEndPrice = totalPrice + vat + shipping / 100;
  return (
    <div className={classes.container}>
      <h6>SUMMARY</h6>
      {cartProducts.map((prod: any) => (
        <div className={classes.prodQuantityContainer}>
          <CartProd
            prodImage={prod.categoryImage.desktop}
            prodPrice={prod.price}
            prodTitle={prod.name}
          />

          <div className={classes.prodQuantity}>x{prod.prodQuantity}</div>
        </div>
      ))}

      <div className={classes.totalContainer}>
        <div className={classes.totalRow}>
          <h5>TOTAL</h5>
          <p>$ {totalPrice}</p>
        </div>
        <div className={classes.totalRow}>
          <h5>SHIPPING</h5>
          <p>$ {shipping}</p>
        </div>
        <div className={classes.totalRow}>
          <h5>VAT (INCLUDED)</h5>
          <p>$ {vat}</p>
        </div>
      </div>
      <div className={classes.grandTotal}>
        <h5>GRAND TOTAL</h5>
        <p>$ {totalEndPrice}</p>
      </div>
      <div className={classes.extendBtn}>
        {cartProducts.length > 0 && (
          <Button style="primary" onClick={showConfirmationHandler}>
            CONTINUE & PAY
          </Button>
        )}
      </div>
      {toggleConfirmation && (
        <>
          <div
            className={classes.backdrop}
            onClick={showConfirmationHandler}
          ></div>
          <OrderConfirmation
            totalPrice={totalEndPrice}
            prodImage={cartProducts[0].categoryImage.desktop}
            prodPrice={cartProducts[0].price}
            prodQuantity={cartProducts[0].prodQuantity}
            prodTitle={cartProducts[0].name}
            prodLength={
              cartProducts.reduce(
                (prod: any, currProd: any) => prod + currProd.prodQuantity,
                0
              ) - cartProducts[0].prodQuantity
            }
          />
        </>
      )}
    </div>
  );
};

export default CheckoutSummary;
