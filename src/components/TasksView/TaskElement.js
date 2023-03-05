import React, { useState } from "react";

const TaskElement = (props) => {
  const expanded = useState(false);
  const score = (props.score / 4) * 100; 
  console.log(score)

  return (
    <div className="w-[min(100%,500px)] bg-white py-2 rounded-lg relative overflow-hidden">
      <p className="my-2 mx-4">{props.title}</p>
      <div className="absolute w-full h-2 bg-white bottom-0 left-0">
        <div className={`bg-secondary h-full`} style={{width: score + "%"}}></div>
      </div>
    </div>
  );
};

export default TaskElement;
