import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleCompleted } from "../todo-state/todosSlice";
import styles from "./TodoList.module.css";

function TodoList() {
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();
  const handleComplete = (id) => {
    dispatch(toggleCompleted(id));
  };
  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <p
          key={todo.id}
          onClick={() => handleComplete(todo.id)}
          className={todo.status.toLowerCase()}
        >
          {todo.text}
        </p>
      ))}
    </div>
  );
}

export default TodoList;
