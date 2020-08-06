import React from 'react';
import styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.titlesList}>
      <p className={styles.titleDate}>ДАТА</p>
      <p className={styles.titleDescription}>ОПИСАНИЕ</p>
      <p className={styles.titleCategory}>КАТЕГОРИЯ</p>
      <p className={styles.titleSumm}>СУММА</p>
    </div>
  );
};

export default Title;
