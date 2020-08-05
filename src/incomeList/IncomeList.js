import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Media from 'react-media';
import Titles from '../oneIncome/titles/Titles';
import OneIncome from '../oneIncome/OneIncome';
import styles from './IncomeList.module.css';

const IncomeList = ({ operations, deleteIncome, setIsMobile }) => {
  setIsMobile(false);
  // console.log("IncomeList");
  return (
    <>
      <ul className={styles.incomeList}>
        <Media
          queries={{
            medium: '(min-width: 768px) and (max-width: 1023px)',
            large: '(min-width: 1024px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.medium && <Titles />}
              {matches.large && <Titles />}
              {operations.length === 0 ? (
                <p className={styles.noIncome}>No income</p>
              ) : (
                operations.map(operation => (
                  <OneIncome
                    operation={operation}
                    key={operation.incomeId}
                    deleteIncome={deleteIncome}
                  />
                ))
              )}
            </Fragment>
          )}
        </Media>
      </ul>
    </>
  );
};

export default IncomeList;
