import styles from "./TodoList.module.css";

export default function TodoList() {
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
