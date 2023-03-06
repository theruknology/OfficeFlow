import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PromptModal from "../UI/Modal";
import CompletedTable from "./CompletedTable";

const Completed = (props) => {
  const completedTasks = useSelector((state) => state.completed);
  const dispatch = useDispatch();

  const taskDeleteHandler = (taskId) => {
    dispatch({ type: "DELETE_COMPLETED", payload: taskId });
  };

  return (
    <PromptModal onClose={props.onClose}>
      <CompletedTable data={completedTasks} onDelete={taskDeleteHandler} />
    </PromptModal>
  );
};

export default Completed;
