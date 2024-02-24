import React from "react";
import classes from "./Button.module.scss";
const Button: React.FC<{
  type?: any;
  form?: any;
  style: string;
  onClick: any;
  disabled?: any;
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
      disabled={props.disabled || null}
      type={props.type || null}
      form={props.form || null}
    >
      {props.children}
    </button>
  );
};

export default Button;
