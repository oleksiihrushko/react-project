import React, { useState } from 'react';

import StatistcsHeader from '../../components/statisticsHeader/StatisticsHeader';
import TotalCostsSumAndIncomeSum from '../../components/totalCostsSumAndIncomeSum/TotalCostsSumAndIncomeSum';
import CategoriesFilter from '../../components/categoriesFilter/CategoriesFilter';
import Chart from '../../components/chart/Chart';

const StatistcsPage = () => {
    const [currentCategory, setCurrentCategory] = useState('All');
    return (
        <>
        {/* <StatistcsHeader /> */}
        <TotalCostsSumAndIncomeSum />
        <CategoriesFilter currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
        <Chart currentCategory={currentCategory}/>
        </>
    )
}
export default StatistcsPage;