import React from "react";

import Dashboard from "./components/Dashboard/Dashboard";
import PromptModal from "./components/UI/Modal";
import Window from "./components/UI/Window";
import "./index.css";

export default function App() {
  return (
    <Window>
      <Dashboard />
    </Window>
  );
}
