import styles from "./TodoInput.module.css";

export default function TodoInput() {
  return (
    <>
      <h1 className={styles.mainHeading}>Input Todo</h1>
      <form className={styles.inputTodoForm}>
        <input
          className={styles.inputTodo}
          type="text"
          placeholder="add todo"
        />
        <button className={styles.btnAdd}>Add</button>
      </form>
    </>
  );
}
