import React from "react";
import { useSelector } from "react-redux";

import TaskList from "../TasksView/TaskList";
import Widgets from "./Widgets";

const Dashboard = (props) => {
  const settings = useSelector((state) => state.settings);
  console.log('im up')

  return (
    <div className="pt-20 px-4 flex flex-col gap-6">
      <h1 className="text-5xl font-semibold text-primary">Home</h1>
      <h2 className="text-2xl font-light italic">
        Welcome{settings.name !== "" ? " back, " + settings.name : ", New User"}{" "}
      </h2>
      <Widgets toggleModals={props.toggleModals}/>
      <TaskList />
    </div>
  );
};

export default Dashboard;
