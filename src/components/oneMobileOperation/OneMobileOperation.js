import React from "react";
import cart from "../../components/operationList/icons/delete.png";
import styles from "./OneMobileOperation.module.css";

const OneMobileOperation = ({ operation, setId, openModal }) => {

  const deleteOperation = (type, id, xId) => {
    if (type === "cost") {
      setId([type, id, xId]);
    } else {
      setId([type, id]);
    }
    openModal();
  };

  return (
    <li className={styles.operationListItem}>
      <p className={styles.date}>{operation.date.slice(0, 10)}</p>
      <p className={styles.category}>
        {operation.costsId ? operation.product.category.name : "Доход"}
      </p>
      {operation.costsId ? (
        <p className={styles.price}>-{operation.amount} грн</p>
      ) : (
        <p className={styles.price}>{operation.amount} грн</p>
      )}

      <button
        type="button"
        className={styles.btnDelete}
        onClick={() =>
          operation.costsId
            ? deleteOperation("cost", operation.forDeleteId, operation.costsId)
            : deleteOperation("income", operation.incomeId)
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
