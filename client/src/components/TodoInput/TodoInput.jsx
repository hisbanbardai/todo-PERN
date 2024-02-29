import { useState } from "react";
import styles from "./TodoInput.module.css";

export default function TodoInput() {
  const [todoInput, setTodoInput] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    setTodoInput("");

    const body = { description: todoInput };

    try {
      const response = await fetch(`http://localhost:8081/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Unable to add todo item`);
      }
      console.log(await response.json());
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <h1 className={styles.mainHeading}>Input Todo</h1>
      <form className={styles.inputTodoForm} onSubmit={handleFormSubmit}>
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
