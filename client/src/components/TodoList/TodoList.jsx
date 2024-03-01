import { useEffect } from "react";
import styles from "./TodoList.module.css";

export default function TodoList() {
  async function getTodos() {
    try {
      const response = await fetch(`http://localhost:8081/todos`);
      console.log(await response.json());
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
