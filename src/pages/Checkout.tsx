import { useNavigate } from "react-router-dom";
import CheckoutForm from "../components/Cart/CheckoutForm";
import CheckoutSummary from "../components/Cart/CheckoutSummary";
import classes from "./Checkout.module.scss";
const CheckoutPage = () => {
  const navigate = useNavigate();

  const navigateBackHandler = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className={classes.backBtn}>
        <span onClick={navigateBackHandler} className={classes.btnText}>
          Go Back
        </span>
      </div>
      <div className={classes.mainContainer}>
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;
