import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import Filter from "../components/Filter";
import List from "../components/List";
import { toggleTodo, addTodo, filterTodo } from "../actions";

const index = (state) => {
  return (
    <div>
      <Header addTodo={state.addTodo}></Header>
      <List todos={state.todos} toggleTodo={state.toggleTodo}></List>
      <Filter filterTodo={state.filterTodo}></Filter>
    </div>
  );
};

const getVisibleTodos = (todos, visibleFilter) => {
  switch (visibleFilter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.isComplete);
    case "SHOW_COMPLETE":
      return todos.filter((t) => t.isComplete);
    default:
      return todos;
  }
};

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  addTodo: (text) => dispatch(addTodo(text)),
  filterTodo: (filter) => dispatch(filterTodo(filter)),
});

const mapStateToProps = (state = []) => ({
  todos: getVisibleTodos(state.todos, state.visibleFilter),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
