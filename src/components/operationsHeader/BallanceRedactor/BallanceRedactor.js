import React, { useState, useEffect } from "react";
import styles from "./ballanceRedactor.module.css";
import { useDispatch, useSelector } from "react-redux";
import GoToStatsButton from "./GoToStatsButton/GoToStatsButton";
import { addBalance } from "../../../redux/finance/financeOperations";

const BallanceRedactor = () => {
  const [isEditing, setEditing] = useState(false);
  const [isFirstTransaction, setisFirstTransaction] = useState(true);

  const balance = useSelector((state) => state.operations.balance);
  const [value, setValue] = useState(balance);

  const income = useSelector((state) => state.operations.income);
  const costs = useSelector((state) => state.operations.costs);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("keydown", escListener);
    return () => {
      window.removeEventListener("keydown", escListener);
    };
  }, []);

  const togleEdit = () => setEditing(!isEditing);
  const escListener = (event) => {
    if (event.keyCode === 27) {
      event.keyCode === 27 && setEditing(false);
      setValue("");
    }
  };

  const handleChange = ({ target: { value } }) => {
    if (value.indexOf(".") != "-1") {
      value = value.substring(0, value.indexOf(".") + 3);
    }
    !isNaN(value) && setValue(value);
  };

  if (income.length !== 0 && costs.length !== 0 && balance !== 0) {
    isFirstTransaction = false;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      togleEdit();
      return;
    }
    if (value !== 0) {
      const newValue = value - balance;
      dispatch(addBalance({ amount: newValue }));
      setValue("");
      togleEdit();
    }
  };
  return (
    <section
      className={`${styles.flex} ${styles.wrapper}  ${styles.secPad}  container`}
    >
      <GoToStatsButton />
      {/* <div className={`${styles.flex} ${styles.div} `}> */}
      <p className={`${styles.bal_text}  `}>Баланс:</p>
      <div className={`${styles.flex} ${styles.ballanceWrap}`}>
        {isEditing ? (
          <form onSubmit={handleSubmit} className={styles.flex}>
            <input
              autoFocus
              className={`${styles.flex} ${styles.value}`}
              type="text"
              value={value}
              onChange={handleChange}
            />
            <button type="submit" className={`${styles.flex} ${styles.btn}`}>
              подтвердить
            </button>
          </form>
        ) : (
          <div className={styles.flex}>
            <p className={styles.value}>{balance}</p>
            <button
              type="button"
              className={`${styles.flex} ${styles.btn}`}
              onClick={() => togleEdit()}
            >
              изменить
            </button>
          </div>
        )}
      </div>
      {/* </div> */}
    </section>
  );
};
export default BallanceRedactor;
