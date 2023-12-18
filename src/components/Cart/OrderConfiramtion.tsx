import classes from "./OrderConfirmation.module.scss";
import confirmationIcon from "../../assets/checkout/icon-order-confirmation.svg";
import CartProd from "./CartProd";
import headphones from "../../assets/cart/image-xx99-mark-one-headphones.jpg";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const homePageNavigationHandler = () => {
    navigate("/");
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
                prodTitle={"XX99 MK II"}
                prodImage={headphones}
                prodPrice={2.999}
              />
              <p>x1</p>
            </div>
            <p className={classes.confirmationText}>and 2 other item(s)</p>
          </div>
          <div className={classes.priceTextContainer}>
            <h6>GRAND TOTAL</h6>
            <p>$ 5,446</p>
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
