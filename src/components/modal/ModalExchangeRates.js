import React, { createRef, useEffect } from 'react';
import styles from './ModalExchangeRates.module.css';
import ExchangeRates from '../exchangeRates/ExchangeRates';


const ModalExchangeRates = ({ closeModal }) => {
  const handleKeydown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleClickModal = e => {
    console.log(e.target);
    if (e.target === modalRef.current || e.target.nodeName === 'BUTTON') {
      closeModal();
    }
  };

  const modalRef = createRef();

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    modalRef.current.addEventListener('click', handleClickModal);
    modalRef.current.addEventListener('click', handleClickModal);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      //! не снят слушатель с окна 
      modalRef.current.removeEventListener('click', handleClickModal);
    };
  }, []);

  return (
    <div ref={modalRef} className={styles.overlay}>
      <div className={styles.modalWindow}>

        <ExchangeRates />
        <div className="borderBtn">
          <button
            className={styles.btnModal}
            type="button"
            onClick={closeModal}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalExchangeRates;



