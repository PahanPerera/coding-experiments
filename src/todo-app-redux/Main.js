import { Provider } from "react-redux";
import styles from "./Main.module.css";
import AddTodo from "./todo-app/AddTodo";
import TodoList from "./todo-app/TodoList";
import { store } from "./todo-state/store";

function TodoAppRedux() {
  return (
    <Provider store={store}>
      <main className={styles.container}>
        <h2>Todo App - Redux</h2>
        <AddTodo />
        <TodoList />
      </main>
    </Provider>
  );
}

export default TodoAppRedux;
