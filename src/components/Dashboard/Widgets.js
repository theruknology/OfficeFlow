import React from "react";

const Widgets = (props) => {
  return (
    <div className="flex gap-2">
      <button
        className="bg-accent text-white rounded-lg py-2 px-4 font-medium hover:bg-orange-600 shadow-inner"
        onClick={() => {
          props.toggleModals("NEW_TASK");
        }}
      >
        +
      </button>

      <button
        className="bg-white text-black rounded-lg py-2 px-4 font-medium hover:bg-gray-200 shadow-inner"
        onClick={() => {
          props.toggleModals("SETTINGS_MODAL");
        }}
      >
        Settings
      </button>

      <button
        className="bg-white text-black rounded-lg py-2 px-4 font-medium hover:bg-gray-200"
        onClick={() => {
          props.toggleModals("COMPLETED_MODAL");
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default Widgets;
