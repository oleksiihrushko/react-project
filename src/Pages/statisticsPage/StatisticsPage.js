import React from 'react';
import StatistcsHeader from '../../components/statisticsHeader';
import TotalCostsSumAndIncomeSum from '../../components/totalCostsSumAndIncomeSum/TotalCostsSumAndIncomeSum';
import CategoriesFilter from '../../components/categoriesFilter/CategoriesFilter';
import Chart from '../../components/chart/Chart';


const StatistcsPage = () => {
    return (
        <StatistcsHeader />
        <TotalCostsSumAndIncomeSum />
        <CategoriesFilter />
        <Chart />
    )
}
export default StatistcsPage();