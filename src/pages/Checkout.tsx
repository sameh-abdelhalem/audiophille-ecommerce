import CheckoutForm from "../components/Cart/CheckoutForm";
import CheckoutSummary from "../components/Cart/CheckoutSummary";
import classes from "./Checkout.module.scss";
const CheckoutPage = () => {
  return (
    <div className={classes.mainContainer}>
      <CheckoutForm />
      <CheckoutSummary />
    </div>
  );
};

export default CheckoutPage;
