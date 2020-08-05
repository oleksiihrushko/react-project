import React from "react";
import cart from "../../components/operationList/icons/delete.png";
import styles from "./OneMobileOperation.module.css";

const OneMobileOperation = ({ operation }) => {
  const deleteOperation = (id) => {};
  return (
    <li className={styles.operationListItem}>
      <p className={styles.date}>{operation.date.slice(0, 10)}</p>
      <p className={styles.category}>
        {operation.costsId ? operation.product.category.name : "Доход"}
      </p>
      <p className={styles.price}>{operation.amount} грн</p>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() =>
          deleteOperation(
            operation.costsId ? operation.forDeleteId : operation.incomeId
          )
        }
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

export default OneMobileOperation;
