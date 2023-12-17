import classes from "./Cart.module.scss";
import headphones from "../../assets/cart/image-xx99-mark-one-headphones.jpg";
import Button from "../UI/Button/Button";
import { useState } from "react";
import { log } from "console";
import { useNavigate } from "react-router-dom";
import CartProd from "./CartProd";
const Cart = (props: any) => {
  const navigate = useNavigate();

  const navigateToCheckoutHandler = () => {
    navigate("/checkout");
    props.hideCart();
  };
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
            <CartProd
              prodImage={headphones}
              prodPrice={2.999}
              prodTitle="XX99 MK II"
            />

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
            <Button style="primary" onClick={navigateToCheckoutHandler}>
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
