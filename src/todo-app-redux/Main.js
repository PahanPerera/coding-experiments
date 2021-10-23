import { Provider } from "react-redux";
import styles from "./Main.module.css";
import AddTodo from "./todo-app/AddTodo";
import TodoList from "./todo-app/TodoList";
import { store } from "./todo-state/store";

function TodoAppRedux() {
  return (
    <Provider store={store}>
      <main className={styles.container}>
        <h1>Todo App - Redux</h1>
        <AddTodo />
        <TodoList />
      </main>
    </Provider>
  );
}

export default TodoAppRedux;
