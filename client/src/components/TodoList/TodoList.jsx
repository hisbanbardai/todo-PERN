import { Fragment, useEffect, useState } from "react";
import styles from "./TodoList.module.css";
import Button from "../Button/Button";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    try {
      const response = await fetch(`http://localhost:8081/todos`);

      if (!response.ok) {
        throw new Error(`Unable to get todos`);
      }

      const todoArray = await response.json();
      console.log(todoArray);
      setTodos(todoArray);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteTodo(todo_id) {
    try {
      const response = await fetch(`http://localhost:8081/todos/${todo_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Unable to delete todo`);
      }

      setTodos((currToDos) =>
        currToDos.filter((todo) => todo.todo_id !== todo_id)
      );
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
        {todos.length > 0 &&
          todos.map((todo) => (
            <Fragment key={todo.todo_id}>
              <p>{todo.description}</p>
              <Button>Edit</Button>
              <Button onClick={() => handleDeleteTodo(todo.todo_id)}>
                Delete
              </Button>
            </Fragment>
          ))}
      </div>
    </>
  );
}
