import classes from "./Root.module.scss";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
const RouterLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default RouterLayout;
