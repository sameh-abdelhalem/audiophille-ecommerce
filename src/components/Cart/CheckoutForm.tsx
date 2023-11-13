import Countries from "./Countries";

const CheckoutForm = () => {
  return (
    <div>
      <h3>CHECKOUT</h3>

      <form action="">
        <div>
          <p>BILLING DETAILS</p>
          <label>
            Name
            <input placeholder="Alexei Ward" type="text" name="name" />
          </label>
          <label>
            Email Address
            <input placeholder="alexei@mail.com" type="email" name="email" />
          </label>
          <label>
            Phone Number
            <input placeholder="+1 202-555-0136" type="number" name="phone" />
          </label>
        </div>
        <div>
          <p>Shipping Info</p>
          <label>
            Address
            <input
              placeholder="1137 Williams Avenue"
              type="text"
              name="address"
            />
          </label>
          <label>
            ZIP Code
            <input placeholder="10001" type="number" name="zip" />
          </label>
          <label>
            Country
            <Countries />
          </label>
        </div>
        <div>
          <p>Payment Details</p>
          <div>
            Payment Method
            <label>
              e-Money
              <input type="radio" name="method" value="e-Money" />
            </label>
            <label>
              Cash on Delivery
              <input type="radio" name="method" value="Cash on Delivery" />
            </label>
          </div>
          <label>
            e-Money Number
            <input placeholder="238521993" type="number" name="enum" />
          </label>
          <label>
            e-Money PIN
            <input placeholder="6891" type="number" name="epin" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
