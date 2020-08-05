import React, { Fragment } from "react";
import Media from "react-media";
import cart from "../operationList/icons/delete.png";
import styles from "./OneOperation.module.css";

const OneOperation = ({
  operation: { id, date, category, operation, price },
}) => {
  const deleteCosts = (id) => {};
  // console.log(id);

  const lengthOneOperationSmall = () => {
    if (operation.length > 8) {
      return operation.slice(0, 8) + "...";
    } else {
      return operation;
    }
  };

  const lengthOneOperation = () => {
    // console.log(operation.length);
    if (operation.length > 22) {
      return operation.slice(0, 22) + "...";
    } else {
      return operation;
    }
  };

  return (
    <li className={styles.operationListItem}>
      <div className={styles.operation}>
        <p className={styles.operationProduct}>
          {
            <Media
              queries={{
                small: "(max-width: 767px)",
                medium: "(min-width: 768px) and (max-width: 1023px)",
                large: "(min-width: 1024px)",
              }}
            >
              {(matches) => (
                <Fragment>
                  {matches.small && lengthOneOperationSmall()}
                  {matches.medium && lengthOneOperation()}
                  {matches.large && lengthOneOperation()}
                </Fragment>
              )}
            </Media>
          }
        </p>
        <p className={styles.date}>{date}</p>
      </div>
      <p className={styles.category}>{category}</p>
      <p className={styles.price}>-{price} грн</p>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() => deleteCosts(id)}
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
