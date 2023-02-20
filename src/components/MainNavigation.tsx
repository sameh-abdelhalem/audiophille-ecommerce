import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";
import headerLogo from "../assets/shared/desktop/logo.svg";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <img src={headerLogo} alt="" />

      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"/headphones"}>HEADPHONES</NavLink>
          </li>
          <li>
            <NavLink to={"/speakers"}>SPEAKERS</NavLink>
          </li>
          <li>
            <NavLink to={"/earphones"}>EARPHONES</NavLink>
          </li>
        </ul>
      </nav>

      <img src={cartIcon} alt="" />
    </header>
  );
};

export default MainNavigation;
