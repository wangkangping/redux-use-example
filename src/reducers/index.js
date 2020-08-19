import { combineReducers } from "redux";

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isComplete: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    default:
      return state;
  }
}

function visibleFilter(state=[], action) {
  switch (action.type) {
    case "FILTER_TODO":
      return action.filter;
    default:
      return state;
  }
}

export default combineReducers({ todos, visibleFilter });
