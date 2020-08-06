import React from 'react';
import cart from '../../components/operationList/icons/delete.png';
import styles from './OneMobileOperation.module.css';

const OneMobileOperation = ({ operation, setId, openModal }) => {
  const deleteOperation = (type, id, xId) => {
    if (type === 'cost') {
      setId([type, id, xId]);
    } else {
      setId([type, id]);
    }
    openModal();
  };

  const lengthOneMobileOperation = () => {
    if (operation.product?.name.length > 15) {
      return operation.product?.name.slice(0, 15) + '...';
    } else {
      return operation.product?.name;
    }
  };

  return (
    <li className={styles.operationListItem}>
      <div className={styles.mobileDate}>
        <p className={styles.category}>
          {operation.costsId ? lengthOneMobileOperation() : 'Доход'}
        </p>
        <p className={styles.date}>{operation.date.slice(0, 10)}</p>
      </div>
      {operation.costsId ? (
        <p className={styles.priceCost}>-{operation.amount} грн</p>
      ) : (
        <p className={styles.priceIncome}>{operation.amount} грн</p>
      )}

      <button
        type="button"
        className={styles.btnDelete}
        onClick={() =>
          operation.costsId
            ? deleteOperation('cost', operation.forDeleteId, operation.costsId)
            : deleteOperation('income', operation.incomeId)
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
