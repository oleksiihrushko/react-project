import React from "react";
import cart from "../components/operationList/icons/delete.png";
import styles from "./OneIncome.module.css";

const OneIncome = ({ operation: { id, date, category, price } }) => {
  const deleteIncome = (id) => {};
  // console.log(id);
  return (
    <li className={styles.operationListItem}>
      <p className={styles.date}>{date}</p>
      <p className={styles.category}>{category}</p>
      <p className={styles.price}>{price} грн</p>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() => deleteIncome(id)}
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
