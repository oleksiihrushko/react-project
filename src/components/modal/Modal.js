import React, { createRef, useEffect } from "react";
import { connect } from "react-redux";
import modalSlice from "../../redux/modal/modalSlice";
import styles from "./Modal.module.css";

const Modal = ({ text, onTrue, closeModal }) => {
  const handleKeydown = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  const handleClickModal = (e) => {
    if (e.target === modalRef.current || e.target.nodeName === "BUTTON") {
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

  return (
    <div ref={modalRef} className={styles.overlay}>
      <div className={styles.modalWindow}>
        <p className={styles.modalDescription}>{text}</p>
        <div className="borderBtn">
          <button className={styles.btnModal} type="button" onClick={onTrue}>
            ДA
          </button>
          <button className={styles.btnModal}>НET</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(modalSlice.actions.setShowModalFalse()),
});

export default connect(null, mapDispatchToProps)(Modal);
