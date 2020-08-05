import React from "react";
import cart from "../components/operationList/icons/delete.png";
import styles from "./OneIncome.module.css";

const OneIncome = ({ operation: { date, amount, incomeId } }) => {
  const deleteIncome = (id) => {};
  // console.log(id);
  return (
    <li className={styles.operationListItem}>
      <p className={styles.date}>
        {date.slice(0, 10) + " " + date.slice(11, 19)}
      </p>
      <p className={styles.category}>Income</p>
      <p className={styles.price}>{amount} грн</p>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() => deleteIncome(incomeId)}
      >
        <img
          src={cart}
          alt="delete"
          width={30}
          className={styles.imgOperation}
        />
      </button>
    </li>
  );
};

export default OneIncome;
