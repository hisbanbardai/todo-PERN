import { useEffect, useState } from "react";
import styles from "./Modal.module.css";

const Modal = function ({ todo, onClose }) {
  const [description, setDescription] = useState(todo?.description);

  return (
    <div className={`${styles.editModal} `}>
      <form>
        <div className={styles.modalBody}>
          <h1>Edit Todo</h1>
          <input type="text" className={styles.editInput} value={description} />
          <div className={styles.formButtons}>
            <button className={styles.btn}>Edit</button>
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
