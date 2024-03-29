import React, { useState } from "react";
import classes from "./SecondaryNavigation.module.scss";
import "./SecondaryNavigation.module.scss";
import headerLogo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import {
  NavLink,
  useLoaderData,
  useLocation,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import { log } from "console";
import Button from "../UI/Button/Button";
import headPhones from "../../assets/Figma/hero-section/hero-headphones.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Cart from "../Cart/Cart";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";

const SecondaryNavigation = () => {
  const cartProducts = useSelector((state: any) => state.cart.products);
  const products: any = useRouteLoaderData("root");

  const [transitionState, setTransitionState] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  const currentPath = useLocation();
  const navigate = useNavigate();

  const showCartHandler = () => {
    setToggleCart((prevState) => !prevState);
  };
  return currentPath.pathname.length === 1 && products ? (
    <>
      {toggleCart && (
        <div className={classes.relativeDiv}>
          <div className={classes.backdrop} onClick={showCartHandler}></div>
        </div>
      )}
      <div className={classes.hero}>
        <div className={classes.mobileBackgroundOpacity}></div>
        <header className={classes.secNavheader}>
          <div className={classes.ddLogoContainer}>
            <Dropdown className={classes.navDropdown}>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                <FontAwesomeIcon
                  icon={icon({ name: "bars" })}
                  className={classes.cartIcon}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  HOME
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    navigate("/headphones");
                  }}
                >
                  HEADPHONES
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    navigate("/speakers");
                  }}
                >
                  SPEAKERS
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    navigate("/earphones");
                  }}
                >
                  EARPHONES
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <img
              src={headerLogo}
              alt=""
              className={classes.logo}
              onClick={() => {
                navigate("/");
              }}
            />
          </div>

          <nav className={classes.desktopNav}>
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/headphones"}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  HEADPHONES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/speakers"}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  SPEAKERS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/earphones"}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  EARPHONES
                </NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "cart-shopping" })}
                className={classes.cartIcon}
                onClick={showCartHandler}
              />
              {cartProducts && cartProducts.length != 0
                ? cartProducts.reduce(
                    (prod: any, currProd: any) => prod + currProd.prodQuantity,
                    0
                  )
                : 0}
            </div>
          </div>
        </header>

        {/* <img src={headPhones} className={classes.headphones} /> */}

        {products && (
          <div className={classes.productContainer}>
            {toggleCart && <Cart hideCart={showCartHandler} />}
            <div className={classes.productDesc}>
              <p className={classes.newProd}>NEW PRODUCT</p>
              <h1>{products[2].name && products[2].name}</h1>
              <p>{products[2].description}</p>
              <Button
                onClick={() => {
                  navigate(`./${products[2].category}/${products[2].id}`);
                }}
                style="primary"
              >
                SEE PRODUCT
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  ) : (
    <>
      {toggleCart && (
        <div className={classes.backdrop} onClick={showCartHandler}></div>
      )}
      <div className={classes.secNavContainer}>
        <header className={classes.secNavheader}>
          <img
            className={classes.secNavLogo}
            src={headerLogo}
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />
          <div className={classes.ddLogoContainer}>
            <Dropdown className={classes.navDropdown}>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                <FontAwesomeIcon
                  icon={icon({ name: "bars" })}
                  className={classes.cartIcon}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  HOME
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    navigate("/headphones");
                  }}
                >
                  HEADPHONES
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    navigate("/speakers");
                  }}
                >
                  SPEAKERS
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    navigate("/earphones");
                  }}
                >
                  EARPHONES
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <img
              src={headerLogo}
              alt=""
              className={classes.logo}
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <nav className={classes.desktopNav}>
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/headphones"}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  HEADPHONES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/speakers"}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  SPEAKERS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/earphones"}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  EARPHONES
                </NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <FontAwesomeIcon
              icon={icon({ name: "cart-shopping" })}
              className={classes.cartIcon}
              onClick={showCartHandler}
            />

            {cartProducts && cartProducts.length != 0
              ? cartProducts.reduce(
                  (prod: any, currProd: any) => prod + currProd.prodQuantity,
                  0
                )
              : 0}
          </div>
          {}
        </header>

        {!currentPath.pathname.slice(1).includes("/") &&
        !currentPath.pathname.includes("checkout") ? (
          <div className={classes.headerTitle}>
            <h2>{currentPath.pathname.slice(1)}</h2>
            {toggleCart && <Cart hideCart={showCartHandler} />}
          </div>
        ) : (
          <div className={classes.relativeDiv}>
            {toggleCart && <Cart hideCart={showCartHandler} />}
          </div>
        )}
      </div>
    </>
  );
};

export default SecondaryNavigation;
