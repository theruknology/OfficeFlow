import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskElement from "./TaskElement";

const TaskList = () => {
  const tasksList = useSelector((state) => state.tasksList);
  const dispatch = useDispatch();

  useEffect(() => {}, [tasksList]);

  const toggleTodo = (taskId, optionId) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: {
        taskId: taskId,
        optionId: optionId,
      },
    });
  };

  const deleteHandler = (taskId) => {
    dispatch({
      type: "DELETE_TASK",
      payload: taskId,
    });
  };

  const addToCompleteHandler = (payload) => {
    dispatch({
      type: "ADD_TO_COMPLETED",
      payload: {
        id: payload.id,
        title: payload.title,
      },
    });
    dispatch({
      type: "DELETE_TASK",
      payload: payload.id,
    });
  };

  return (
    <div className="flex flex-col gap-2 mb-10">
      {tasksList.map((itm) => {
        return (
          <TaskElement
            key={itm.id}
            task={itm}
            toggleTodo={toggleTodo}
            onDelete={() => {
              deleteHandler(itm.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
