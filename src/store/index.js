import { createStore } from "redux";

const initialState = {
  tasksList: [],
  completed: [],
  settings: {
    name: "",
    defaultOptions: ["Step 1", "Step 2", "Step 3", "Step 4"],
  },
};

const editTodo = (payload, list) => {
  const todos = [...list];
  const todo = todos.find((todo) => todo.id === payload.id);
  todo.score = payload.score > todo.score ? payload.score : todo.score;
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
      return { ...state, tasksList: [...state.tasksList, action.payload] };
    case "DELETE_TASK":
      return {
        ...state,
        tasksList: deleteTodo(action.payload, state.tasksList),
      };
    case "SETTING_NAME":
      return {
        ...state,
        settings: {
          ...settings,
          name: action.payload,
        },
      };
    case "SETTING_DEF_OPTIONS":
      return {
        ...state,
        settings: {
          ...settings,
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
    default:
      return state;
  }
};

const store = createStore(tasksReducer);

export default store;
