import React, { useEffect, useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Completed from "./components/Completed/Completed";

import Dashboard from "./components/Dashboard/Dashboard";
import NewTask from "./components/NewTask/NewTask";
import Settings from "./components/Settings/Settings";
import Window from "./components/UI/Window";
import "./index.css";

const initialState = {
  newTaskModal: false,
  settingsModal: false,
  completedModal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_TASK":
      return { ...state, newTaskModal: action.payload };
    case "SETTINGS_MODAL":
      return { ...state, settingsModal: action.payload };
    case "COMPLETED_MODAL":
      return { ...state, completedModal: action.payload };
    default:
      return state;
  }
};

export default function App() {
  const [content, dispatchContent] = useReducer(reducer, initialState);

  const tasksList = useSelector((state) => state.tasksList);
  const settings = useSelector((state) => state.settings);
  const completed = useSelector((state) => state.completed);
  const dispatcher = useDispatch();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("TASKS"));
    if (storedTasks) {
      dispatcher({
        type: "UPDATE_TASKS",
        payload: storedTasks,
      });
    }

    const storedSettings = JSON.parse(localStorage.getItem("SETTINGS"));
    if (storedSettings) {
      dispatcher({
        type: "UPDATE_SETTINGS",
        payload: storedSettings,
      });
    }

    const storedCompleted = JSON.parse(localStorage.getItem("COMPLETED"));
    if (storedCompleted) {
      dispatcher({
        type: "UPDATE_COMPLETED",
        payload: storedCompleted,
      });
    }
  }, []);

  const addToCompleteHandler = (payload) => {
    dispatcher({
      type: "ADD_TO_COMPLETED",
      payload: {
        id: payload.id,
        title: payload.title,
      },
    });
    dispatcher({
      type: "DELETE_TASK",
      payload: payload.id,
    });
  };

  useEffect(() => {
    const completed = tasksList.filter((itm) => itm.score === 4);
    completed.map((itm) => {
      addToCompleteHandler({ id: itm.id, title: itm.title });
    });
    localStorage.setItem("TASKS", JSON.stringify(tasksList));
  }, [tasksList]);

  useEffect(() => {
    localStorage.setItem("SETTINGS", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem("COMPLETED", JSON.stringify(completed));
  }, [completed]);

  const closeNewTaskHandler = () => {
    dispatchContent({ type: "NEW_TASK", payload: false });
  };
  const closeSettingsHandler = () => {
    dispatchContent({ type: "SETTINGS_MODAL", payload: false });
  };
  const closeCompletedHandler = () => {
    dispatchContent({ type: "COMPLETED_MODAL", payload: false });
  };

  const openModalHandler = (content) => {
    dispatchContent({ type: content, payload: true });
  };

  return (
    <>
      {content.newTaskModal && <NewTask onClose={closeNewTaskHandler} />}
      {content.settingsModal && <Settings onClose={closeSettingsHandler} />}
      {content.completedModal && <Completed onClose={closeCompletedHandler} />}

      <Window>
        <Dashboard toggleModals={openModalHandler} />
      </Window>
    </>
  );
}
