import todosSlice from "./slices/todos.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todosState: todosSlice.reducer,
  },
});

export default store;
