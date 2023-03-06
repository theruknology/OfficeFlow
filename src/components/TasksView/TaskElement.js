import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OptionElement from "./OptionElement";

const TaskElement = (props) => {
  const [expanded, setExpanded] = useState(true);

  const score = (props.task.score / 4) * 100;

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  const toggleTodo = useCallback((optionId) => {
    props.toggleTodo(props.task.id, optionId);
  }, []);

  const expandedContent = (
    <>
      <ul className="flex flex-col gap-2">
        {props.task.options.map((itm) => (
          <OptionElement key={itm.id} opt={itm} toggleTodo={toggleTodo} />
        ))}
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
