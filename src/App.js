import React, { useReducer, useState } from "react";

import Dashboard from "./components/Dashboard/Dashboard";
import NewTask from "./components/NewTask/NewTask";
import Window from "./components/UI/Window";
import "./index.css";

const initialState = {
  newTaskModal: false,
  settingsModal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_TASK":
      return { ...state, newTaskModal: action.payload };
    case "SETTINGS_MODAL":
      return { ...state, settingsModal: action.payload };
    default:
      return state;
  }
};

export default function App() {
  // const [newTaskModal, setNewTaskModal] = useState(true);
  // const [settingsModal, setSettingsModal] = useState(false);

  const [content, dispatchContent] = useReducer(reducer, initialState);
  const closeNewTaskHandler = () => {
    dispatchContent({ type: "NEW_TASK", payload: false });
  };
  const openModalHandler = (content) => {
    dispatchContent({ type: content, payload: true });
  };

  return (
    <>
      {content.newTaskModal && <NewTask onClose={closeNewTaskHandler} />}
      <Window>
        <Dashboard
          toggleModals={openModalHandler}
        />
      </Window>
    </>
  );
}
