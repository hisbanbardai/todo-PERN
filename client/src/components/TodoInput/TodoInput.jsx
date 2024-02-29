import { useState } from "react";
import styles from "./TodoInput.module.css";

export default function TodoInput() {
  const [todoInput, setTodoInput] = useState("");

  return (
    <>
      <h1 className={styles.mainHeading}>Input Todo</h1>
      <form className={styles.inputTodoForm}>
        <input
          className={styles.inputTodo}
          type="text"
          placeholder="add todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button className={styles.btnAdd}>Add</button>
      </form>
    </>
  );
}
