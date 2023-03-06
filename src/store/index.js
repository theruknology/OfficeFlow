import { createStore } from "redux";

const initialState = {
  tasksList: [],
  completed: [],
  settings: {
    name: "",
    defaultOptions: [
      { id: 0, name: "Step 1", checked: false },
      { id: 1, name: "Step 2", checked: false },
      { id: 2, name: "Step 3", checked: false },
      { id: 3, name: "Step 4", checked: false },
    ],
  },
};

const editTodo = (payload, list) => {
  const todos = [...list];
  const todo = todos.find((todo) => todo.id === payload.id);
  todo.score = payload.score > todo.score ? payload.score : todo.score;
  return todos;
};

const toggleTodo = (taskId, optionId, list) => {
  const todos = [...list];
  const todo = todos.find((todo) => todo.id === taskId);

  todo.options.map((itm) => {
    itm.checked = itm.id === optionId ? !itm.checked : itm.checked;
  });

  let score = 0;

  todo.options.map((itm) => {
    score = itm.checked ? score + 1 : score;
  })

  todo.score = score;

  console.log(list);
  return todos;
};

const deleteTodo = (id, list) => {
  return list.filter((todo) => todo.id !== id);
};

const addToCompleted = (payload, list) => {
  return [...list, { id: payload.id, title: payload.title, date: new Date() }];
};

const deleteCompleted = (id, list) => {
  return list.filter((todo) => todo.id !== id);
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasksList: [action.payload, ...state.tasksList] };
    case "DELETE_TASK":
      return {
        ...state,
        tasksList: deleteTodo(action.payload, state.tasksList),
      };
    case "SETTING_NAME":
      return {
        ...state,
        settings: {
          ...state.settings,
          name: action.payload,
        },
      };
    case "SETTING_DEF_OPTIONS":
      return {
        ...state,
        settings: {
          ...state.settings,
          defaultOptions: action.payload,
        },
      };
    case "EDIT_TASK":
      if (action.payload.score === 4) {
        return {
          ...state,
          tasksList: deleteTodo(action.payload.id, state.tasksList),
          completed: addToCompleted(action.payload, state.completed),
        };
      }
      return {
        ...state,
        tasksList: editTodo(action.payload, state.tasksList),
      };
    case "ADD_TO_COMPLETED":
      return {
        ...state,
        completed: addToCompleted(action.payload, state.completed),
      };
    case "DELETE_COMPLETED":
      return {
        ...state,
        completed: deleteCompleted(action.payload, state.completed),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        tasksList: toggleTodo(
          action.payload.taskId,
          action.payload.optionId,
          state.tasksList
        ),
      };
    case "UPDATE_SETTINGS":
      return {
        ...state,
        settings: action.payload,
      };
    case "UPDATE_TASKS":
      return {
        ...state,
        tasksList: action.payload,
      };
    case "UPDATE_COMPLETED":
      return {
        ...state,
        completed: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(tasksReducer);

export default store;
