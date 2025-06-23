import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const FILTRATION_TYPES = {
  ALL: "all",
  COMPLETED: "completed",
  IN_PROGRESS: "in-progress",
};

// Fetch and load todos from Async Storage
const STORAGE_KEY = "@todos";
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.log("Faild to load todos from storage: ", error);
  }
});

// Save todos to storage whenever they change
const saveTodosToStorage = async (todos) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error("Failed to save todos:", error);
  }
};

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    error: "",
    loading: false,
    filter: FILTRATION_TYPES.ALL,
  },

  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
      saveTodosToStorage(state.todos);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
      saveTodosToStorage(state.todos);
    },
    markAsCompleted: (state, action) => {
      const id = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodosToStorage(state.todos);
      }
    },
    updateFilter: (state, action) => {
      const filter = action.payload;
      state.filter = filter;
    },
  },
});

export const { addTodo, removeTodo, markAsCompleted, updateFilter } =
  todosSlice.actions;
export default todosSlice;
