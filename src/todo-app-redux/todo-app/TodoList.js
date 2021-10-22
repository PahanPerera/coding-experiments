import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { markAsCompleted } from "../todo-state/todosSlice";
import styles from "./TodoList.module.css";

function TodoList() {
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();
  const handleComplete = (id) => {
    dispatch(markAsCompleted(id));
  };
  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <p key={todo.id} onClick={() => handleComplete(todo.id)}>
          <span>{todo.status === "COMPLETED" ? "✔️" : "⚪"}</span> {todo.text}
        </p>
      ))}
    </div>
  );
}

export default TodoList;
