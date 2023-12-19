import React, { useState } from "react";
import classes from "./SecondaryNavigation.module.scss";
import "./SecondaryNavigation.module.scss";
import headerLogo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import { NavLink, useLocation } from "react-router-dom";
import { log } from "console";
import Button from "../UI/Button/Button";
import headPhones from "../../assets/Figma/hero-section/hero-headphones.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Cart from "../Cart/Cart";
import Dropdown from "react-bootstrap/Dropdown";

const SecondaryNavigation = () => {
  const [transitionState, setTransitionState] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  const currentPath = useLocation();
  const showCartHandler = () => {
    setToggleCart((prevState) => !prevState);
  };
  return currentPath.pathname.length === 1 ? (
    <>
      {toggleCart && (
        <div className={classes.relativeDiv}>
          <div className={classes.backdrop} onClick={showCartHandler}></div>
        </div>
      )}
      <div className={classes.hero}>
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
                <Dropdown.Item href="#/action-1">HOME</Dropdown.Item>
                <Dropdown.Item href="#/action-2">HEADPHONES</Dropdown.Item>
                <Dropdown.Item href="#/action-3">SPEAKERS</Dropdown.Item>
                <Dropdown.Item href="#/action-3">EARPHONES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <img src={headerLogo} alt="" />
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
          <FontAwesomeIcon
            icon={icon({ name: "cart-shopping" })}
            className={classes.cartIcon}
            onClick={showCartHandler}
          />
        </header>

        <img src={headPhones} className={classes.headphones} />

        <div className={classes.productContainer}>
          {toggleCart && <Cart hideCart={showCartHandler} />}
          <div className={classes.productDesc}>
            <p className={classes.newProd}>NEW PRODUCT</p>
            <h1>XX99 Mark II Headphones</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button onClick={null} style="primary">
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      {toggleCart && (
        <div className={classes.backdrop} onClick={showCartHandler}></div>
      )}
      <div className={classes.secNavContainer}>
        <header className={classes.secNavheader}>
          <img src={headerLogo} alt="" />
          <nav>
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
          <FontAwesomeIcon
            icon={icon({ name: "cart-shopping" })}
            className={classes.cartIcon}
            onClick={showCartHandler}
          />
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
