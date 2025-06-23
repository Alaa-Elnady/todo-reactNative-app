import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: "",
  },

  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    markAsCompleted: (state, action) => {
      const id = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateFilter: (state, action) => {
      const filter = action.payload;
      state.filter = filter;
    },
  },
});
