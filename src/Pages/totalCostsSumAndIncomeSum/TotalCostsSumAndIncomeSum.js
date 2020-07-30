import React from 'react';
import PropTypes from 'prop-types';
import s from './TotalCostsSumAndIncomeSum.module.css';

function TotalCostsSumAndIncomeSum({ costsSum, incomeSum }) {
    return (
        <div className={s.wrapper}>
          <div className={s.column}>
            <p className={s.stat_title}>Расходы:</p>
            <p className={s.stat_exp}>-{costsSum} грн</p>
          </div>
          <div className={s.separate} />
          <div className={s.column}>
            <p className={s.stat_title}>Доходы:</p>
            <p className={s.stat_inc}>{incomeSum} грн</p>
          </div>
        </div>
    );
  }

  TotalCostsSumAndIncomeSum.propTypes = {
    costsSum: PropTypes.number.isRequired,
    incomeSum: PropTypes.number.isRequired,
  };

  export default StatisticAmounts;