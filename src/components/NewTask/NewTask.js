import React from "react";

import PromptModal from "../UI/Modal";

const NewTask = (props) => {

  const onCloseHandle = () => {
    props.onClose();
  }

  return (
    <PromptModal onClose={onCloseHandle}>
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-2xl">New Task</h1>
        
      </div>
    </PromptModal>
  );
};

export default NewTask;
