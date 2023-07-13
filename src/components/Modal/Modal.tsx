import classes from "./Modal.module.scss";
import ReactDOM from "react-dom";
const Backdrop = (props: any) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props: any) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalEl: any = document.getElementById("overlays");
const Modal = (props: any) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </>
  );
};

export default Modal;
