import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todo-state/todosSlice";
import styles from "./AddTodo.module.css";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(text));
    setText("");
  };

  const handleEnterPressed = (e) => {
    if (e.key === "Enter") handleAddTodo();
  };

  return (
    <div className={styles.form}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleEnterPressed}
      />
      <button onClick={handleAddTodo}>ADD</button>
    </div>
  );
}

export default AddTodo;
