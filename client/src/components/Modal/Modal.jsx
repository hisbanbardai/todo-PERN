import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./Modal.module.css";

const Modal = forwardRef(function ({ props }, ref) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });

  return (
    <dialog className={styles.editModal} ref={modal}>
      <form method="dialog">
        <div className={styles.modalBody}>
          <h1>Edit Todo</h1>
          <input type="text" className={styles.editInput} />
          <div className={styles.formButtons}>
            <button className={styles.btn}>Edit</button>
            <button className={styles.btn}>Close</button>
          </div>
        </div>
      </form>
    </dialog>
  );
});

export default Modal;
