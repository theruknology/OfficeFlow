import React from "react";

const Window = (props) => {
  return (
    <div className="w-[min(800px,100vw)] mx-auto min-h-screen">
      {props.children}
    </div>
  );
};

export default Window;
