import { useRouteError } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import SecondaryNavigation from "../components/SecondaryNavigation/SecondaryNavigation";
import classes from "./Error.module.scss";
const ErrorPage = () => {
  let title = "An error occured!";
  let message = "Something went wrong!";
  const error: any = useRouteError();
  if (error.status == 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status == 404) {
    title = "Page not found!";
    message = "Could not find resource or page";
  }
  return (
    <>
      <SecondaryNavigation />
      <div className={classes.error}>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
