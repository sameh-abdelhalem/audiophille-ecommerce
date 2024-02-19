import classes from "./Cart.module.scss";
import headphones from "../../assets/cart/image-xx99-mark-one-headphones.jpg";
import Button from "../UI/Button/Button";
import { useState } from "react";
import { log } from "console";
import { useNavigate } from "react-router-dom";
import CartProd from "./CartProd";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store";
const Cart = (props: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToCheckoutHandler = () => {
    navigate("/checkout");
    props.hideCart();
  };
  const removeAllHandler = () => {
    dispatch(cartActions.removeAll());
  };

  const cartProducts = useSelector((state: any) => state.cart.products);
  return (
    <div className={classes.backdrop}>
      <div className={classes.cartContainer}>
        <div className={classes.cartContent}>
          <div className={classes.cartHeader}>
            <h6>
              CART ({" "}
              {cartProducts.length != 0
                ? cartProducts.reduce(
                    (prod: any, currProd: any) => prod + currProd.prodQuantity,
                    0
                  )
                : 0}
              )
            </h6>
            <p className={classes.remove} onClick={removeAllHandler}>
              Remove all
            </p>
          </div>
          {cartProducts.map((prod: any) => {
            return (
              <div className={classes.prodContainer}>
                <CartProd
                  prodImage={prod.prodImg}
                  prodPrice={prod.prodPrice.toFixed(3)}
                  prodTitle={prod.prodTitle}
                />

                <div className={classes.addToCart}>
                  <div className={classes.quantity}>
                    <div
                      className={classes.amount}
                      onClick={() => {
                        if (prod.prodQuantity > 1) {
                          dispatch(cartActions.decrementProd(prod.prodId));
                        } else {
                          dispatch(cartActions.removeProd(prod.prodId));
                        }
                      }}
                    >
                      -
                    </div>
                    <div>{prod.prodQuantity}</div>
                    <div
                      className={classes.amount}
                      onClick={() => {
                        dispatch(cartActions.incrementProd(prod.prodId));
                      }}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className={classes.cartFooter}>
            <div className={classes.totalPrice}>
              <p className={classes.amount2}>TOTAL</p>
              <h6>
                ${" "}
                {cartProducts
                  .reduce((prevProd: any, newProd: any) => {
                    console.log(prevProd);
                    console.log(newProd);

                    return prevProd + newProd.prodPrice * newProd.prodQuantity;
                  }, 0)
                  .toFixed(3)}
              </h6>
            </div>
            {cartProducts.length > 0 ? (
              <Button style="primary" onClick={navigateToCheckoutHandler}>
                CHECKOUT
              </Button>
            ) : (
              <Button
                disabled="true"
                style="primary"
                onClick={navigateToCheckoutHandler}
              >
                CHECKOUT
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
