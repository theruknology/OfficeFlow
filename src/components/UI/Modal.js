import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="fixed top-0 left-0 z-20 w-full overflow-hidden h-full
  bg-gray-900 bg-opacity-90"
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed w-fit rounded-lg py-16 px-8 bg-white h-fit z-30 border  bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 max-h-[600px] min-h-[400px] overflow-y-scroll">
      {props.children}
    </div>
  );
};

const PromptModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default PromptModal;
export { Backdrop, ModalOverlay };