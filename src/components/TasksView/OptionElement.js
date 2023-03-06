import React, { useEffect, useState } from "react";

const OptionElement = (props) => {

  return (
    <li key={props.opt.id} className="flex gap-2">
      <input
        id={props.opt.id}
        type="checkbox"
        checked={props.opt.checked}
        onChange={() => {
          props.toggleTodo(props.opt.id);
        }}
      />
      <label>{props.opt.name}</label>
    </li>
  );
};

export default OptionElement;
