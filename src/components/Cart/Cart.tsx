import classes from "./Cart.module.scss";
import headphones from "../../assets/cart/image-xx99-mark-one-headphones.jpg";
import Button from "../UI/Button/Button";
import { useState } from "react";
import { log } from "console";
const Cart = () => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.cartContainer}>
        <div className={classes.cartContent}>
          <div className={classes.cartHeader}>
            <h6>CART (3)</h6>
            <p
              className={classes.remove}
              onClick={() => {
                console.log("all items were removed !!");
              }}
            >
              Remove all
            </p>
          </div>
          <div className={classes.prodContainer}>
            <div className={classes.headphonesPrice}>
              <img src={headphones} alt="" />
              <div>
                <p className={classes.prodTitle}>XX99 MK II</p>
                <p className={classes.prodPrice}>$ 2,999</p>
              </div>
            </div>

            <div className={classes.addToCart}>
              <div className={classes.quantity}>
                <div className={classes.amount}>-</div>
                <div>1</div>
                <div className={classes.amount}>+</div>
              </div>
            </div>
          </div>
          <div className={classes.cartFooter}>
            <div className={classes.totalPrice}>
              <p className={classes.amount}>TOTAL</p>
              <h6>$ 5,396</h6>
            </div>
            <Button style="primary" onClick={null}>
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
