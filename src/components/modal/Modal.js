import React, { createRef, useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ closeModal }) => {
  const handleKeydown = (e) => {
    console.log(e.code);

    if (e.code === "Escape") {
      closeModal();
    }
  };

  const handleClickModal = (e) => {
    console.log(e.target);

    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    modalRef.current.addEventListener("click", handleClickModal);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      modalRef.current.removeEventListener("click", handleClickModal);
    };
  }, []);

  const modalRef = createRef();

  const logout = () => {
    closeModal();
  }

  return (
    <div ref={modalRef} className={styles.overlay}>
      <div className={styles.modalWindow}>
        <p className={styles.modalDescription}>
          Вы действительно хотите выйти?
        </p>
        <div className="borderBtn">
          <button
            className={styles.btnModal}
            type="button"
            onClick={logout}

          >
            ДA
          </button>
          <button className={styles.btnModal} onClick={closeModal}>
            НET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
