import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo(state, { payload }) {
      state.list.push({
        id: state.list.length + 1,
        text: payload,
        status: "PENDING",
      });
    },
    markAsCompleted(state, { payload }) {
      state.list.find((todo) => todo.id === payload).status = "COMPLETED";
    },
  },
});

export const { addTodo, markAsCompleted } = todosSlice.actions;
export default todosSlice.reducer;
