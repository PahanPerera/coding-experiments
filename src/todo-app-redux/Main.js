import { Provider } from "react-redux";
import styles from "./Main.module.css";
import AddTodo from "./todo-app/AddTodo";
import TodoList from "./todo-app/TodoList";
import { store } from "./todo-state/store";

function TodoAppRedux() {
  return (
    <Provider store={store}>
      <main className={styles.container}>
        <div>
          Source Code -
          <a
            href="https://github.com/PahanPerera/coding-experiments/tree/main/src/todo-app-redux"
            target={"_blank"}
            rel="noreferrer"
          >
            https://github.com/PahanPerera/coding-experiments/tree/main/src/todo-app-redux
          </a>
        </div>
        <h1>Todo App - Redux</h1>
        <AddTodo />
        <TodoList />
      </main>
    </Provider>
  );
}

export default TodoAppRedux;
