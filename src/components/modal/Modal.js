import React, { createRef, useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ text, onTrue, closeModal }) => {
  const handleKeydown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleClickModal = e => {
    if (e.target === modalRef.current || e.target.dataset.type === '1') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    modalRef.current.addEventListener('click', handleClickModal);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      modalRef.current.removeEventListener('click', handleClickModal);
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
          <button data-type="1" className={styles.btnModal}>
            НET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
