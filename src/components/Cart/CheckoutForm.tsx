import Countries from "./Countries";
import classes from "./CheckoutForm.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const dispatch = useDispatch();
  dispatch(cartActions.validateForm(isValid));
  console.log(watch("method"));
  const method = watch("method");
  return (
    <div className={classes.formContainer}>
      <h3>CHECKOUT</h3>

      <form
        action=""
        id="checkout-form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className={classes.labelsContainer}>
          <p>BILLING DETAILS</p>
          <div className={classes.adjInputs}>
            <label>
              Name
              <input
                placeholder="Alexei Ward"
                type="text"
                {...register("name", { required: "please enter a name!" })}
              />
              <p className={classes.error}>
                {errors.name ? `${errors.name?.message}` : null}
              </p>
            </label>
            <label>
              Email Address
              <input
                placeholder="alexei@mail.com"
                type="email"
                {...register("email", {
                  required: "please enter an email address!",
                  pattern: {
                    value: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
                    message:
                      "please enter a valid email address with @ included!",
                  },
                })}
                className={classes.noMarginRight}
              />
              <p className={classes.error}>
                {errors.email ? `${errors.email?.message}` : null}
              </p>
            </label>
          </div>
          <label className={classes.halfWidth}>
            Phone Number
            <input
              placeholder="+1 202-555-0136"
              type="number"
              {...register("phone", {
                required: "please enter a phone number!",
              })}
            />
            <p className={classes.error}>
              {errors.phone ? `${errors.phone?.message}` : null}
            </p>
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
              {...register("address", { required: "please enter an address!" })}
            />
            <p className={classes.error}>
              {errors.address ? `${errors.address?.message}` : null}
            </p>
          </label>
          <div className={classes.adjInputs}>
            <label>
              ZIP Code
              <input
                placeholder="10001"
                type="number"
                {...register("zip", { required: "please enter a ZIP code!" })}
              />
              <p className={classes.error}>
                {errors.zip ? `${errors.zip?.message}` : null}
              </p>
            </label>
            <label>
              City
              <input
                placeholder="New York"
                type="text"
                {...register("city", { required: "please enter your city!" })}
                className={classes.noMarginRight}
              />
              <p className={classes.error}>
                {errors.city ? `${errors.city?.message}` : null}
              </p>
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
                <input
                  type="radio"
                  {...register("method", {
                    required: "please pick a payment method",
                  })}
                  value="e-Money"
                />
                e-Money
              </label>
              <label className={classes.radioLabels}>
                <input
                  type="radio"
                  {...register("method", {
                    required: "please pick a payment method",
                  })}
                  value="Cash on Delivery"
                />
                Cash on Delivery
              </label>
              <p className={classes.error}>
                {errors.method ? `${errors.method?.message}` : null}
              </p>
            </div>
          </div>
          {method == "e-Money" && (
            <div className={classes.radioLabelsDiv}>
              <label>
                e-Money Number
                <input
                  placeholder="238521993"
                  type="number"
                  {...register("enum", { required: "please type your enum" })}
                  className={classes.noMarginRight}
                />
                <p className={classes.error}>
                  {errors.enum ? `${errors.enum?.message}` : null}
                </p>
              </label>
              <label>
                e-Money PIN
                <input
                  placeholder="6891"
                  type="number"
                  {...register("epin", { required: "please type your epin" })}
                  className={classes.noMarginRight}
                />
                <p className={classes.error}>
                  {errors.epin ? `${errors.epin?.message}` : null}
                </p>
              </label>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
