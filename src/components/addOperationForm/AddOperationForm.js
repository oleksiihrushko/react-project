import React, { useState } from 'react';
import Media from 'react-media';
import styles from './addOperationForm.module.css';
import Calc from './calc/calc';
import arrow from './img/arrow.png';
import calc from './img/calculator.png';

const OperationForm = ({ operationType, setOperation }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [total, setTotal] = useState('');
  const [modalMobile, setModalMobile] = useState(false);

  const [displayValue, setDisplayValue] = useState('0');
  const [isCalcOpen, setOpenCalc] = useState(false);

  const changeTotalByCalc = () => {
    setTotal(displayValue);
    setOpenCalc(false);
  };

  const openCalc = () => {
    setOpenCalc(!isCalcOpen);
    setDisplayValue('0');
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleClear = () => {
    setDate('');
    setDescription('');
    setTotal('');
  };

  const openModal = () => {
    if (window.screen.width >= 767) return;
    setModalMobile(true);
  };

  return (
    <div className={styles.operationContainer}>
      <button
        className={styles.credit}
        style={
          window.screen.width >= 767
            ? operationType === 'credit'
              ? { backgroundColor: '#fefefe', color: '#fb812d', zIndex: 10 }
              : null
            : null
        }
        name="credit"
        onClick={e => {
          setOperation(e.target.name);
          openModal();
        }}
      >
        ДОХОД
      </button>
      <button
        className={styles.debit}
        style={
          window.screen.width >= 767
            ? operationType === 'debit'
              ? { backgroundColor: '#fefefe', color: '#fb812d', zIndex: 10 }
              : null
            : null
        }
        name="debit"
        onClick={e => {
          setOperation(e.target.name);
          openModal();
        }}
      >
        РАСХОД
      </button>
      <Media
        queries={{
          small: '(max-width: 767px)',
        }}
      >
        {matches =>
          matches.small ? (
            modalMobile && (
              <div className={styles.operationFormModal}>
                <img
                  className={styles.backButton}
                  src={arrow}
                  alt="arrow"
                  onClick={() => setModalMobile(false)}
                />
                <div className={styles.modalBackground} />
                <form onSubmit={handleSubmit}>
                  <input
                    className={styles.dateModalInput}
                    type="date"
                    name="date"
                    value={date}
                    onChange={({ target }) => setDate(target.value)}
                  />
                  <textarea
                    type="text"
                    className={styles.desctiptionModalInput}
                    name="description"
                    placeholder="Здесь ты будешь вносить на что ты тратишь деньги"
                    value={description}
                    onChange={({ target }) => setDescription(target.value)}
                  />
                  <div className={styles.modalTotal}>
                    <input
                      type="number"
                      className={styles.totalModalInput}
                      name="total"
                      placeholder="00.00"
                      value={total}
                      onChange={({ target }) => setTotal(target.value)}
                    />
                    <div className={styles.modalCalc}>
                      <img
                        src={calc}
                        alt="calculator"
                        onClick={() => openCalc()}
                      />
                    </div>
                  </div>

                  <div className={styles.modalButtons}>
                    <button className={styles.submitModalButton}>ВВОД</button>
                    <button
                      onClick={() => handleClear()}
                      className={styles.clearModalButton}
                    >
                      ОЧИСТИТЬ
                    </button>
                  </div>
                </form>
                {isCalcOpen && (
                  <Calc
                    displayValue={displayValue}
                    setDisplayValue={setDisplayValue}
                    changeTotalByCalc={changeTotalByCalc}
                    setOpenCalc={setOpenCalc}
                  />
                )}
              </div>
            )
          ) : (
            <div className={styles.operationForm}>
              <form onSubmit={handleSubmit}>
                <input
                  className={styles.dateInput}
                  type="date"
                  name="date"
                  value={date}
                  onChange={({ target }) => setDate(target.value)}
                />
                <input
                  type="text"
                  className={styles.desctiptionInput}
                  name="description"
                  placeholder="Здесь ты будешь вносить на что ты тратишь деньги"
                  value={description}
                  onChange={({ target }) => setDescription(target.value)}
                />
                <input
                  type="number"
                  className={styles.totalInput}
                  name="total"
                  placeholder="0.00"
                  value={total}
                  onChange={({ target }) => setTotal(target.value)}
                />
                <img
                  className={styles.calculator}
                  src={calc}
                  alt="calculator"
                  onClick={() => openCalc()}
                />
                <div className={styles.buttons}>
                  <button className={styles.submitButton}>ВВОД</button>
                  <button
                    onClick={() => handleClear()}
                    className={styles.clearButton}
                  >
                    ОЧИСТИТЬ
                  </button>
                </div>
              </form>
              {isCalcOpen && (
                <Calc
                  displayValue={displayValue}
                  setDisplayValue={setDisplayValue}
                  changeTotalByCalc={changeTotalByCalc}
                />
              )}
            </div>
          )
        }
      </Media>
    </div>
  );
};

export default OperationForm;
