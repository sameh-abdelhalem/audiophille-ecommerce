import classes from "./Root.module.scss";
import { Outlet } from "react-router-dom";
const RouterLayout = () => {
  return (
    <>
      <h1>Nav</h1>
      <main className={classes.content}>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default RouterLayout;
