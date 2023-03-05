import React from "react";

const Widgets = () => {
  return (
    <div className="flex gap-2">
      <button className="bg-accent text-white rounded-lg py-2 px-4 font-medium hover:bg-orange-600">
        New Task
      </button>

      <button className="bg-white text-black rounded-lg py-2 px-4 font-medium hover:bg-gray-200">
        Settings
      </button>

      <button className="bg-white text-black rounded-lg py-2 px-4 font-medium hover:bg-gray-200">
        Completed
      </button>
    </div>
  );
};

export default Widgets;
