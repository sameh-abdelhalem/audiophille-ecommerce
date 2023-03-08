import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.scss";
import headerLogo from "../../assets/shared/desktop/logo.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerDesc}>
        <img src={headerLogo} className={classes.headerLogo} alt="" />
        <p className={classes.footerDescParagraph}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
      <div>
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
        <div className={classes.socials}>
          <img src={facebook} className={classes.socialIcon} alt="" />
          <img src={twitter} className={classes.socialIcon} alt="" />
          <img src={instagram} className={classes.socialIcon} alt="" />
        </div>
        {/* Socail Icons */}
      </div>
    </div>
  );
};

export default Footer;
