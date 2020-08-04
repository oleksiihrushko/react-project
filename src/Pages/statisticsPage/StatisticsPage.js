import React, { useState } from 'react';
<<<<<<< HEAD

=======
>>>>>>> e2ef41d9b4097bbf847b31be1effc998427810e5
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