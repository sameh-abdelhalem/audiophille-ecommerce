import CartProd from "./CartProd";
import classes from "./CheckoutSummary.module.scss";
import headphones from "../../assets/cart/image-xx99-mark-one-headphones.jpg";
const CheckoutSummary = () => {
  return (
    <div className={classes.container}>
      <h6>SUMMARY</h6>

      <div className={classes.prodQuantityContainer}>
        <CartProd
          prodImage={headphones}
          prodPrice={2.999}
          prodTitle="XX99 MK II"
        />

        <div className={classes.prodQuantity}>x1</div>
      </div>
      <div className={classes.totalContainer}>
        <div className={classes.totalRow}>
          <h5>TOTAL</h5>
          <p>$ 5,396</p>
        </div>
        <div className={classes.totalRow}>
          <h5>SHIPPING</h5>
          <p>$ 50</p>
        </div>
        <div className={classes.totalRow}>
          <h5>VAT (INCLUDED)</h5>
          <p>$ 1,079</p>
        </div>
      </div>
      <div className={classes.grandTotal}>
        <h5>GRAND TOTAL</h5>
        <p>$ 5,446</p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
