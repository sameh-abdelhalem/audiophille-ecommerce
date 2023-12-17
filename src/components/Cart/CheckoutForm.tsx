import Countries from "./Countries";
import classes from "./CheckoutForm.module.scss";
const CheckoutForm = () => {
  return (
    <div className={classes.formContainer}>
      <h3>CHECKOUT</h3>

      <form action="">
        <div className={classes.labelsContainer}>
          <p>BILLING DETAILS</p>
          <div className={classes.adjInputs}>
            <label>
              Name
              <input placeholder="Alexei Ward" type="text" name="name" />
            </label>
            <label>
              Email Address
              <input
                placeholder="alexei@mail.com"
                type="email"
                name="email"
                className={classes.noMarginRight}
              />
            </label>
          </div>
          <label className={classes.halfWidth}>
            Phone Number
            <input placeholder="+1 202-555-0136" type="number" name="phone" />
          </label>
        </div>
        <div>
          <p>Shipping Info</p>
          <label>
            Address
            <input
              className={classes.noMarginRight}
              placeholder="1137 Williams Avenue"
              type="text"
              name="address"
            />
          </label>
          <div className={classes.adjInputs}>
            <label>
              ZIP Code
              <input placeholder="10001" type="number" name="zip" />
            </label>
            <label>
              City
              <input
                placeholder="New York"
                type="text"
                name="city"
                className={classes.noMarginRight}
              />
            </label>
          </div>
          <label className={classes.halfWidth}>
            Country
            <Countries />
          </label>
        </div>
        <div>
          <p>Payment Details</p>
          <div className={classes.pmtRadio}>
            <h6>Payment Method</h6>

            <div className={classes.radioContainer}>
              <label className={classes.radioLabels}>
                <input type="radio" name="method" value="e-Money" />
                e-Money
              </label>
              <label className={classes.radioLabels}>
                <input type="radio" name="method" value="Cash on Delivery" />
                Cash on Delivery
              </label>
            </div>
          </div>
          <div className={classes.radioLabelsDiv}>
            <label>
              e-Money Number
              <input
                placeholder="238521993"
                type="number"
                name="enum"
                className={classes.noMarginRight}
              />
            </label>
            <label>
              e-Money PIN
              <input
                placeholder="6891"
                type="number"
                name="epin"
                className={classes.noMarginRight}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
