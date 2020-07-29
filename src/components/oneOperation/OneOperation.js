import React from "react";
import cart from "../operationList/icons/delete.png";
import styles from "./OneOperation.module.css";

const OneOperation = ({
  operation: { id, date, category, operation, price },
}) => {
  const deleteOperation = (id) => {
    
  };
  // console.log(id);
  return (
    <li className={styles.operationListItem}>
      <div className={styles.operation}>
        <p className={styles.operationProduct}>{operation}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <p className={styles.category}>{category}</p>
      <p className={styles.price}>-{price} грн</p>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() => deleteOperation(id)}
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

export default OneOperation;
