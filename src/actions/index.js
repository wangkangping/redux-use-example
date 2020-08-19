let initId = 0;

export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: initId++,
  text,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});


export const filterTodo = (filter) => ({
  type: "FILTER_TODO",
  filter,
});