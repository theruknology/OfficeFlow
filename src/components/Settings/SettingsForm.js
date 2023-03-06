import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SettingsForm = (props) => {
  const settings = useSelector((state) => state.settings);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState(settings.name);
  const [defaultOptions, setDefaultOptions] = useState(
    settings.defaultOptions.map((itm) => itm.name)
  );

  const optionChangeHandler = (e, index) => {
    setDefaultOptions((prev) => {
      const newSteps = [...prev];
      newSteps[index] = e.target.value;
      return newSteps;
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (userName !== "") {
      let emptyStep = false;
      defaultOptions.map((itm) => {
        if (itm.trim() === "") {
          emptyStep = true;
        }
      });
      if (!emptyStep) {
        // dispatch with data
        const optData = [];
        defaultOptions.map((itm) => {
          optData.push({ id: crypto.randomUUID, name: itm, checked: false });
        });

        dispatch({ type: "SETTING_NAME", payload: userName });
        dispatch({ type: "SETTING_DEF_OPTIONS", payload: optData });

        props.onClose();

      } else {
        setError(true);
      }
    }

    setError(true);
  };

  const errorContent = (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Error! </strong>
      <span className="block sm:inline">
        You must fill the complete form, before saving.
      </span>
    </div>
  )

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-2"
      onSubmit={submitHandler}
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={userName}
          id="name"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="steps">
          Default Steps
        </label>
        <input
          className="w-full border-b rounded-none rounded-b py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={defaultOptions[0]}
          onChange={(e) => {
            optionChangeHandler(e, 0);
          }}
          id="step1"
          type="text"
          placeholder="Enter name for step 1"
        />
        <input
          className="w-full border-b rounded-none rounded-b py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={defaultOptions[1]}
          onChange={(e) => {
            optionChangeHandler(e, 1);
          }}
          id="step2"
          type="text"
          placeholder="Enter name for step 2"
        />
        <input
          className="w-full border-b rounded-none rounded-b py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            optionChangeHandler(e, 2);
          }}
          value={defaultOptions[2]}
          id="step3"
          type="text"
          placeholder="Enter name for step 3"
        />
        <input
          className="w-full border-b rounded-none rounded-b py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            optionChangeHandler(e, 3);
          }}
          value={defaultOptions[3]}
          id="step4"
          type="text"
          placeholder="Enter name for step 4"
        />
      </div>
      <div className="self-end flex gap-2 w-fit">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          type="button"
          onClick={()=> {props.onClose()}}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default SettingsForm;
