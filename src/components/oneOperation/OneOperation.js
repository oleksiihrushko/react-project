import React, { Fragment } from 'react';
import Media from 'react-media';
import cart from '../operationList/icons/delete.png';
import styles from './OneOperation.module.css';

const OneOperation = ({
  operation: { amount, date, product, forDeleteId },
}) => {
  const deleteCosts = id => {};

  const lengthOneOperationSmall = () => {
    if (product?.name.length > 8) {
      return product?.name.slice(0, 8) + '...';
    } else {
      return product?.name;
    }
  };

  const lengthOneOperation = () => {
    if (product?.name.length > 22) {
      return product?.name.slice(0, 22) + '...';
    } else {
      return product?.name;
    }
  };
  // console.log(product);
  return (
    <li className={styles.operationListItem}>
      <div className={styles.operation}>
        <p className={styles.operationProduct}>
          {
            <Media
              queries={{
                small: '(max-width: 767px)',
                medium: '(min-width: 768px) and (max-width: 1023px)',
                large: '(min-width: 1024px)',
              }}
            >
              {matches => (
                <Fragment>
                  {matches.small && lengthOneOperationSmall()}
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
        onClick={() => deleteCosts(forDeleteId)}
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
