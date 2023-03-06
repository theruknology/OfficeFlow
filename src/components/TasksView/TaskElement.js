import React, { useCallback, useEffect, useState } from "react";
import OptionElement from "./OptionElement";

const TaskElement = (props) => {
  const [expanded, setExpanded] = useState(false);

  const score = (props.task.score / 4) * 100;

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  const toggleTodo = useCallback((optionId) => {
    props.toggleTodo(props.task.id, optionId);
  }, []);

  const date = new Date(props.task.date);
 

  const expandedContent = (
    <>
      <ul className="flex flex-col gap-2">
        <p className="text-xs font-medium bg-gray-200 px-2 py-1 rounded-sm w-fit italic">
          {date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        {props.task.options.map((itm) => (
          <OptionElement key={itm.id} opt={itm} toggleTodo={toggleTodo} />
        ))}
        <button
          className="w-fit inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-red-600 hover:text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 self-end"
          onClick={() => {
            props.onDelete();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1H4V5zm13 4v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h14zm-6 1a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0V10z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1">Delete</span>
        </button>
      </ul>
    </>
  );

  return (
    <div className="w-[min(100%,500px)] bg-white py-2 rounded-xl relative overflow-hidden px-4 pb-4 transition-[1s] shadow-lg">
      <p
        className="mt-2 underline cursor-pointer"
        style={{ marginBottom: expanded ? "0.5rem" : "0" }}
        onClick={toggleExpanded}
      >
        {props.task.title}
      </p>

      {expanded && expandedContent}

      <div className="absolute w-full h-2 bg-white bottom-0 left-0">
        <div
          className={`bg-secondary h-full`}
          style={{ width: score + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default TaskElement;
