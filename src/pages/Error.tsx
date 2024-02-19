import Footer from "../components/Footer/Footer";
import SecondaryNavigation from "../components/SecondaryNavigation/SecondaryNavigation";
import classes from "./Error.module.scss";
const ErrorPage = () => {
  return (
    <>
      <SecondaryNavigation />
      <div className={classes.error}>
        <h1>An error occured!</h1>
        <p>could not find this page!</p>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
