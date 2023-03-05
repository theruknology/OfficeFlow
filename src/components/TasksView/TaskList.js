import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskElement from "./TaskElement";

const TaskList = () => {
  const tasksList = useSelector((state) => state.tasksList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: 1,
        title: "New Task",
        score: 0,
        options: ["Step 1", "Step 2", "Step 3", "Step 4"],
        date: new Date(),
      },
    });
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: 2,
        title: "ANothre",
        score: 2,
        options: ["Step 1", "Step 2", "Step 3", "Step 4"],
        date: new Date(),
      },
    });
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: 3,
        title: "And ANother",
        score: 3,
        options: ["Step 1", "Step 2", "Step 3", "Step 4"],
        date: new Date(),
      },
    });
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {tasksList.map((itm) => {
        return <TaskElement key={itm.id} title={itm.title} due={itm.date} score={itm.score}/>;
      })}
    </div>
  );
};

export default TaskList;
