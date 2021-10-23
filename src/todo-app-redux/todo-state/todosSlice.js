import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [
      {
        id: 1,
        text: "Buy Milk and Bananas",
        status: "COMPLETED",
      },
      {
        id: 2,
        text: "Buy Anniversary Gift",
        status: "PENDING",
      },
    ],
  },
  reducers: {
    addTodo(state, { payload }) {
      state.list.push({
        id: state.list.length + 1,
        text: payload,
        status: "PENDING",
      });
    },
    toggleCompleted(state, { payload }) {
      let todo = state.list.find((todo) => todo.id === payload);
      todo.status === "COMPLETED"
        ? (todo.status = "PENDING")
        : (todo.status = "COMPLETED");
    },
  },
});

export const { addTodo, toggleCompleted } = todosSlice.actions;
export default todosSlice.reducer;
