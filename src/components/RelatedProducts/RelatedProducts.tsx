import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import classes from "./RelatedProducts.module.scss";
import markIHeadphone from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import speakersImage from "../../assets/product-zx9-speaker/desktop/image-product.jpg";
import whiteHeadphoneImage from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import Button from "../UI/Button/Button";
const DUMMYRELATEDPRODUCTS = [
  { prodImage: markIHeadphone, prodTitle: "XX99 MARK I", prodID: 1 },
  { prodImage: whiteHeadphoneImage, prodTitle: "XX59", prodID: 2 },
  { prodImage: speakersImage, prodTitle: "ZX9 SPEAKER", prodID: 3 },
];

const RelatedProducts: React.FC<{
  products: any;
}> = (props) => {
  const prod = useRouteLoaderData("prod");

  const navigate = useNavigate();

  const navigateHandler = (id: any) => {
    navigate(`/${props.products.category}/${id}`, {
      state: prod,
    });
  };
  return (
    <>
      <h4>you may also like</h4>
      <div className={classes.products}>
        {console.log(props.products)}
        {props.products.others.map((prod: any) => {
          return (
            <div className={classes.product}>
              <img src={prod.image.desktop} />
              <h5>{prod.name}</h5>

              <Button
                style="primary"
                onClick={() => {
                  navigateHandler(prod.id);
                }}
              >
                SEE PRODDUCT
              </Button>
            </div>
          );
        })}
        {/* <div className={classes.product}>
        <Link to={"/headphones"}>
          <img src={markIHeadphone} />
          <h6>Headphones</h6>
          <span className={classes.prodLink}>Shop</span>
        </Link>
      </div>
      <div className={classes.product}>
        <Link to={"/headphones"}>
          <img src={speakersCategory} className={classes.speakers} alt="" />
          <h6>Speakers</h6>
          <span className={classes.prodLink}>Shop</span>
        </Link>
      </div>
      <div className={classes.product}>
        <Link to={"/headphones"}>
          <img src={earphonesCategory} alt="" />
          <h6>Earphones</h6>
          <span className={classes.prodLink}>Shop</span>
        </Link>
      </div> */}
      </div>
    </>
  );
};

export default RelatedProducts;
