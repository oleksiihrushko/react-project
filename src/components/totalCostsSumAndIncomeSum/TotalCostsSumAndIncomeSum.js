import React from 'react';
import PropTypes from 'prop-types';
import s from './TotalCostsSumAndIncomeSum.module.css';
import { useSelector } from 'react-redux';



function TotalCostsSumAndIncomeSum() {
  // const costs = useSelector(state => state.operations.costs);
  const income = useSelector(state => state);
  console.log(income);

    return (
      <div className={"container"}>
        <div className={s.wrapper}>
          <div className={s.column}>
            <p className={s.stat_title}>Расходы:</p>
            <p className={s.stat_exp}>-{0} грн</p>
          </div>
          <div className={s.separate} />
          <div className={s.column}>
            <p className={s.stat_title}>Доходы:</p>
            <p className={s.stat_inc}>{0} грн</p>
          </div>
        </div>
      </div>
    );
  }

  TotalCostsSumAndIncomeSum.propTypes = {
    costsSum: PropTypes.number.isRequired,
    incomeSum: PropTypes.number.isRequired,
  };

  export default TotalCostsSumAndIncomeSum;