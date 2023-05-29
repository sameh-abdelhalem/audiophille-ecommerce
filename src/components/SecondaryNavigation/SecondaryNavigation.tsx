import React from "react";
import classes from "./SecondaryNavigation.module.scss";
import headerLogo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import { NavLink, useLocation } from "react-router-dom";
import { log } from "console";

const SecondaryNavigation = () => {
  const currentPath = useLocation();

  console.log(currentPath);
  return (
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

        <img src={cartIcon} alt="" />
      </header>
      <div className={classes.headerTitle}>
        <h2>{currentPath.pathname.slice(1)}</h2>
      </div>
    </div>
  );
};

export default SecondaryNavigation;
