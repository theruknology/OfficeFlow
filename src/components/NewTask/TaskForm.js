import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const NewTaskForm = (props) => {
  const stepsData = useSelector((state) => state.settings);
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState(
    stepsData.defaultOptions.map((itm) => itm.name)
  );
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const handleStepChange = (e, index) => {
    setSteps((prev) => {
      const newSteps = [...prev];
      newSteps[index] = e.target.value;
      return newSteps;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() !== "") {
      setError(false);
      const data = {
        id: crypto.randomUUID(),
        title: title,
        score: 0,
        options: [
          { id: 0, name: steps[0], checked: false },
          { id: 1, name: steps[1], checked: false },
          { id: 2, name: steps[2], checked: false },
          { id: 3, name: steps[3], checked: false },
        ],
        date: new Date(),
      };
      dispatch({ type: "ADD_TASK", payload: data });

      setTitle("");
      setSteps(stepsData.defaultOptions.map((itm) => itm.name));

      props.onClose();

      return;
    }

    setError(true);
  };

  const errorMesssage = (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Error! </strong>
      <span className="block sm:inline">
        You must enter a title to add a task.
      </span>
    </div>
  );

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <p className="text-gray-600 text-sm mb-4 italic">
        Please enter a title and up to four steps for your task below.{" "}
      </p>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <p>Steps:</p>

      <div className="w-full mb-4">
        <div className="relative">
          <input
            type="text"
            className="w-full block px-4 py-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Step 1"
            value={steps[0]}
            onChange={(e) => handleStepChange(e, 0)}
          />
        </div>
        <div className="relative">
          <input
            type="text"
            className="block w-full px-4 py-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Step 2"
            value={steps[1]}
            onChange={(e) => handleStepChange(e, 1)}
          />
        </div>
        <div className="relative">
          <input
            type="text"
            className="block w-full px-4 py-2  border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Step 3"
            value={steps[2]}
            onChange={(e) => handleStepChange(e, 2)}
          />
        </div>
        <div className="relative">
          <input
            type="text"
            className="block w-full px-4 py-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Step 4"
            value={steps[3]}
            onChange={(e) => handleStepChange(e, 3)}
          />
        </div>
      </div>

      {error && errorMesssage}

      <button
        className="w-fit bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default NewTaskForm;
