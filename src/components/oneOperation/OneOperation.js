import React, { Fragment } from 'react';
import Media from 'react-media';
import cart from '../operationList/icons/delete.png';
import styles from './OneOperation.module.css';

const OneOperation = ({
  operation: { amount, date, product, forDeleteId, costsId },
  setId,
  openModal,
}) => {
  const deleteCosts = (id, xId) => {
    setId([id, xId]);
    openModal();
  };

  const lengthOneOperation = () => {
    if (product?.name.length > 22) {
      return product?.name.slice(0, 22) + '...';
    } else {
      return product?.name;
    }
  };

  return (
    <li className={styles.operationListItem}>
      <div className={styles.operation}>
        <p className={styles.operationProduct}>
          {
            <Media
              queries={{
                medium: '(min-width: 768px) and (max-width: 1023px)',
                large: '(min-width: 1024px)',
              }}
            >
              {matches => (
                <Fragment>
                  {matches.medium && lengthOneOperation()}
                  {matches.large && lengthOneOperation()}
                </Fragment>
              )}
            </Media>
          }
        </p>
        <p className={styles.date}>{date.slice(0, 10)}</p>
      </div>
      <p className={styles.category}>{product?.category.name}</p>
      <p className={styles.price}>-{amount} грн</p>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() => deleteCosts(forDeleteId, costsId)}
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
