import { useEffect, useState } from "react";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    try {
      const response = await fetch(`http://localhost:8081/todos`);

      if (!response.ok) {
        throw new Error(`Unable to add todo item`);
      }

      const todoArray = await response.json();
      console.log(todoArray);
      setTodos(todoArray);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <h1 className={styles.mainHeading}>List of Todos</h1>
      <div className={styles.mainContainer}>
        <h2>Description</h2>
        <h2>Edit</h2>
        <h2>Delete</h2>
      </div>
    </>
  );
}
