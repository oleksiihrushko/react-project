import React, { useState, useEffect } from 'react';
import Media from 'react-media';
import styles from './addOperationForm.module.css';
import Calc from './calc/calc';
import arrow from './img/arrow.png';
import calc from './img/calculator.png';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelector } from '../../redux/finance/financeSelectors';
import {
  getCategories,
  addIncome,
  addCosts,
} from '../../redux/finance/financeOperations';

const OperationForm = ({ operationType, setOperation }) => {
  // const [operationType, setOperation] = useState("credit");
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [total, setTotal] = useState('');
  const [modalMobile, setModalMobile] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [alertModal, setAlertModal] = useState(false);
  
  const [displayValue, setDisplayValue] = useState("0");
  const [isCalcOpen, setOpenCalc] = useState(false);

  const dispatch = useDispatch();
  const categoryList = useSelector(categoriesSelector);

  // useEffect(() => {
  //   dispatch(getCategories());
  // }, []);

  const changeTotalByCalc = () => {
    setTotal(displayValue);
    setOpenCalc(false);
  };

  const formAlert = () => {
    if (operationType === "debit") {
      if (date === "" || description === "" || category === "" || total === "") {
        setAlertModal(true)
      }
    }  else if (operationType === "credit") {
      if (date === "" || total === "") {
        setAlertModal(true)
      }
    } 

    setTimeout(() => {
      setAlertModal(false)
    }, 2000);
  }

  const handleChangeCategory = (e) => {
    setCategory(e.target.value)
    let id = ""; 
    e.target.childNodes.forEach(element => {
      // console.log(element.id);
      if (element.value === e.target.value) {
        id = element.id;
      }
    });
    setCategoryID(id);
  };

  const openCalc = () => {
    setOpenCalc(!isCalcOpen);
    setDisplayValue('0');
  };
  //? addCosts = (costDescription, categoryId, date, amount)
  const handleSubmit = e => {
    e.preventDefault();
    formAlert()
    
    if (operationType === "credit") {
      if (date === "" || total === "") return
      dispatch(addIncome({
        amount: Number(total),
        date: new Date(date).toISOString()
      }))
      setModalMobile(false)
      handleClear()
      // dispatch(addIncome(Number(total)))
    } else {
      if (date === "" || description === "" || total === "" || category === "") return
      dispatch(addCosts(description, categoryID, new Date(date).toISOString(), Number(total)))
      handleClear()
      setModalMobile(false)

    }
  };

  const handleClear = () => {
    setDate('');
    setDescription('');
    setTotal('');
    setCategory('');
  };

  const openModal = () => {
    if (window.screen.width >= 767) return;
    setModalMobile(true);
  };

  return (
    <div className={styles.operationContainer}>
      {/* <button onClick={() => console.log(categoryList)}>TEST</button> */}
      {alertModal && <div className={styles.formAlert}>Заполните все поля</div>}
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
          handleClear();
          openModal();
        }}
      >
        РАСХОД
      </button>
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
          handleClear();
          openModal();
        }}
      >
        ДОХОД
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
                  <select
                    className={styles.categoryForm}
                    value={category}
                    onChange={handleChangeCategory}
                    disabled={operationType === 'credit' ? 'disabled' : null}
                  >
                    {operationType === 'credit' ? (
                      <option value="" disabled selected hidden>
                        Доход
                      </option>
                    ) : (
                      <option value="" disabled selected hidden>
                        Категория
                      </option>
                    )}
                    {categoryList.map(categ => (
                      <option id={categ._id}>{categ.name}</option>
                    ))}
                  </select>

                  <textarea
                    type="text"
                    className={styles.desctiptionModalInput}
                    name="description"
                    placeholder={
                      operationType === 'credit'
                        ? 'Внесите ваш доход в следующее поле'
                        : 'Здесь ты будешь вносить на что ты тратишь деньги'
                    }
                    value={operationType === 'credit' ? '' : description}
                    onChange={({ target }) => setDescription(target.value)}
                    readOnly={operationType === 'credit' && 'readOnly'}
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
                  placeholder={
                    window.screen.width >= 767 && window.screen.width <= 1279
                      ? operationType === 'credit'
                        ? 'Внесите ваш доход далее'
                        : 'На что вы тратите деньги'
                      : operationType === 'credit'
                      ? 'Внесите ваш доход в следующее поле'
                      : 'Здесь ты будешь вносить на что ты тратишь деньги'
                  }
                  value={operationType === 'credit' ? '' : description}
                  onChange={({ target }) => setDescription(target.value)}
                  readOnly={operationType === 'credit' && 'readOnly'}
                />
                <select
                  className={styles.categoryInput}
                  value={category}
                  onChange={handleChangeCategory}
                  disabled={operationType === 'credit' ? 'disabled' : null}
                >
                  {operationType === 'credit' ? (
                    <option value="" disabled selected hidden>
                      Доход
                    </option>
                  ) : (
                    <option value="" disabled selected hidden>
                      Категория
                    </option>
                  )}
                  {categoryList.map(categ => (
                    <option id={categ._id}>{categ.name}</option>
                  ))}
                </select>
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
