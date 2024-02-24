import React from "react";
import Button from "../UI/Button/Button";
import classes from "./EarphoneThirdAd.module.scss";
import thirdAd from "../../assets/home/desktop/image-earphones-yx1.jpg";
import { useNavigate } from "react-router-dom";

const EarphoneThirdAd: React.FC<{
  prod: any;
}> = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.thirdAd}>
      <img src={thirdAd} alt="" />
      <div className={classes.productDesc}>
        <div className={classes.titleButton}>
          <h4>{props.prod.name}</h4>
          <Button
            style={"transparent"}
            onClick={() => {
              navigate(`./${props.prod.category}/${props.prod.id}`);
            }}
          >
            SEE PRODUCT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EarphoneThirdAd;
