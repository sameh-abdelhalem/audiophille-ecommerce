import classes from "./OrderConfirmation.module.scss";
import confirmationIcon from "../../assets/checkout/icon-order-confirmation.svg";
import CartProd from "./CartProd";
import headphones from "../../assets/cart/image-xx99-mark-one-headphones.jpg";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";

const OrderConfirmation: React.FC<{
  totalPrice: number;
  prodPrice: number;
  prodQuantity: number;
  prodImage: string;
  prodLength: number;
  prodTitle: string;
}> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const homePageNavigationHandler = () => {
    navigate("/");
    dispatch(cartActions.removeAll());
  };
  return (
    <div className={classes.confirmationContainer}>
      <img src={confirmationIcon} alt="confirmed!" />
      <h3>Thank You For Your Order</h3>
      <p className={classes.confirmationText}>
        You will receive an email confirmation shortly.
      </p>

      <div>
        <div className={classes.totalPriceContainer}>
          <div className={classes.prodDetails}>
            <div className={classes.prodQuantityContainer}>
              <CartProd
                prodTitle={props.prodTitle}
                prodImage={props.prodImage}
                prodPrice={props.prodPrice}
              />
              <p>x{props.prodQuantity}</p>
            </div>
            {props.prodLength > 1 && (
              <p className={classes.confirmationText}>
                and {props.prodLength} other item(s)
              </p>
            )}
          </div>
          <div className={classes.priceTextContainer}>
            <h6>GRAND TOTAL</h6>
            <p>$ {props.totalPrice}</p>
          </div>
        </div>
        <Button style={"primary"} onClick={homePageNavigationHandler}>
          BACK TO HOME
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
