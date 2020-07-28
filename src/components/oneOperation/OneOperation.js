import React from "react";
import cart from "../operationList/icons/delete.png";
import styles from "./OneOperation.module.css";

const OneOperation = ({
  operation,
  // {id, category, operation} - в operation
  deleteOperation,
}) => {
  return (
    <ul className={styles.containerList}>
      <li className={styles.operationListItem}>
        <div className={styles.operation}>
          <p className={styles.operationProduct}>Bananas</p>
          <p className={styles.date}>21.07.2020</p>
        </div>
        <p className={styles.category}>Products</p>
        <p className={styles.price}>50 uah</p>
        <button
          type="button"
          className={styles.btnDelete}
          onClick={() => deleteOperation()}
          //   id - в deleteOperation
        >
          <img
            src={cart}
            alt="delete"
            width={30}
            className={styles.imgOperation}
          />
        </button>
      </li>

      <li className={styles.operationListItem}>
        <div className={styles.operation}>
          <p className={styles.operationProduct}>Bananas</p>
          <p className={styles.date}>21.07.2020</p>
        </div>
        <p className={styles.category}>Products</p>
        <p className={styles.price}>50 uah</p>
        <button
          type="button"
          className={styles.btnDelete}
          onClick={() => deleteOperation()}
          //   id - в deleteOperation
        >
          <img
            src={cart}
            alt="delete"
            width={30}
            className={styles.imgOperation}
          />
        </button>
      </li>

      <li className={styles.operationListItem}>
        <div className={styles.operation}>
          <p className={styles.operationProduct}>Bananas</p>
          <p className={styles.date}>21.07.2020</p>
        </div>
        <p className={styles.category}>Products</p>
        <span className={styles.price}>10000 uah</span>
        <button
          type="button"
          className={styles.btnDelete}
          onClick={() => deleteOperation()}
          //   id - в deleteOperation
        >
          <img
            src={cart}
            alt="delete"
            width={30}
            className={styles.imgOperation}
          />
        </button>
      </li>
    </ul>
  );
};

export default OneOperation;
