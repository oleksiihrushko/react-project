import React from 'react';
import styles from './Titles.module.css';

const Title = () => {
  return (
    <div className={styles.titlesList}>
      <h3 className={styles.titleDate}>ДАТА</h3>
      <h3 className={styles.titleCategory}>КАТЕГОРИЯ</h3>
      <h3 className={styles.titleSumm}>СУММА</h3>
    </div>
  );
};

export default Title;
