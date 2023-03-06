import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";
import headerLogo from "../assets/shared/desktop/logo.svg";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import React from "react";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
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

      <img src={cartIcon} alt="" />
    </header>
  );
};

export default MainNavigation;
