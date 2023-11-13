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
      </form>
    </div>
  );
};

export default CheckoutForm;
