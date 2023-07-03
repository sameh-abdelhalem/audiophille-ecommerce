import React from "react";
import classes from "./Button.module.scss";
const Button: React.FC<{
  style: string;
  onClick: any;
  children: React.ReactNode;
}> = (props) => {
  return (
    <button
      className={
        props.style === "transparent"
          ? classes.transparent
          : props.style === "prodCatButton"
          ? classes.prodCatButton
          : props.style === "primary"
          ? classes.primary
          : ""
      }
      onClick={props.onClick || null}
    >
      {props.children}
    </button>
  );
};

export default Button;
