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
        options: [
          { id: 0, name: "Step 1", checked: false },
          { id: 1, name: "Step 2", checked: false },
          { id: 2, name: "Step 3", checked: false },
          { id: 3, name: "Step 4", checked: false },
        ],
        date: new Date(),
      },
    });
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: 2,
        title: "ANothre",
        score: 2,
        options: [
          { id: 0, name: "Step 1", checked: false },
          { id: 1, name: "Step 2", checked: false },
          { id: 2, name: "Step 3", checked: false },
          { id: 3, name: "Step 4", checked: false },
        ],
        date: new Date(),
      },
    });
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: 3,
        title: "And ANother",
        score: 3,
        options: [
          { id: 0, name: "Step 1", checked: false },
          { id: 1, name: "Step 2", checked: false },
          { id: 2, name: "Step 3", checked: false },
          { id: 3, name: "Step 4", checked: false },
        ],
        date: new Date(),
      },
    });
  }, []);

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
      type: "DELETE_TASK", payload: taskId
    })
  }

  return (
    <div className="flex flex-col gap-2">
      {tasksList.map((itm) => {
        return (
          <TaskElement
            key={itm.id}
            task={itm}
            toggleTodo={toggleTodo}
            onDelete = {() => {deleteHandler(itm.id)}}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
