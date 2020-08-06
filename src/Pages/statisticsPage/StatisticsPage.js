import React, { useState, useEffect } from 'react';
import StatistcsHeader from '../../components/statisticsHeader/StatisticsHeader';
import TotalCostsSumAndIncomeSum from '../../components/totalCostsSumAndIncomeSum/TotalCostsSumAndIncomeSum';
import CategoriesFilter from '../../components/categoriesFilter/CategoriesFilter';
import Chart from '../../components/chart/Chart';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api';
import { getDataOnInit } from '../../redux/finance/financeOperations';
import authSelectors from '../../redux/auth/authSelectors';

const StatistcsPage = () => {
  const token = useSelector(state => authSelectors.token(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      api.token.set(token);
    }
    dispatch(getDataOnInit());
    return;
  }, []);
  const [currentCategory, setCurrentCategory] = useState('All');
  // console.log('currentCategory', currentCategory)
  return (
    <>
      <StatistcsHeader />
      <TotalCostsSumAndIncomeSum />
      <CategoriesFilter
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <Chart currentCategory={currentCategory} />
    </>
  );
};
export default StatistcsPage;
