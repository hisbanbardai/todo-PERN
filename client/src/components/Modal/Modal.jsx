import { useState } from "react";
import styles from "./Modal.module.css";

const Modal = function ({ todo, onClose }) {
  const [description, setDescription] = useState(todo?.description);

  function handleEditTodoInput(e) {
    setDescription(e.target.value);
  }

  async function handleUpdateTodo(todo_id) {
    try {
      const body = { description };

      const response = await fetch(`http://localhost:8081/todos/${todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Unable to update todo`);
      }

      console.log(await response.json());
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={`${styles.editModal} `}>
      <form>
        <div className={styles.modalBody}>
          <h1>Edit Todo</h1>
          <input
            type="text"
            className={styles.editInput}
            value={description}
            onChange={handleEditTodoInput}
          />
          <div className={styles.formButtons}>
            <button
              className={styles.btn}
              onClick={() => handleUpdateTodo(todo.todo_id)}
            >
              Edit
            </button>
            <button className={styles.btn} onClick={() => onClose(null)}>
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
