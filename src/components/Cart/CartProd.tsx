import classes from "./CartProd.module.scss";
import headphones from "../../assets/cart/image-xx99-mark-one-headphones.jpg";
const CartProd: React.FC<{
  prodTitle: string;
  prodPrice: number;
  prodImage: string;
}> = (props) => {
  return (
    <div className={classes.headphonesPrice}>
      <img src={props.prodImage} alt="" />
      <div>
        <p className={classes.prodTitle}>{props.prodTitle}</p>
        <p className={classes.prodPrice}>$ {props.prodPrice}</p>
      </div>
    </div>
  );
};

export default CartProd;
