import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartSettings } from 'react-chartjs-2';
import { getCurrencySign } from './helpers';
import BarChart from './BarChart';
import PieChart from './PieChart';
import styles from './Chart.module.css';

const Chart = ({ currentCategory }) => {
  const [activeTab, setActiveTab] = useState('bar');

  const currentCurrency = useSelector(
    state => state.exchangeRatesRoot.exchangeCurrency,
  );

  const currencySign = getCurrencySign(currentCurrency);

  if (activeTab === 'bar') {
    ChartSettings.defaults.global.legend.display = false;
  }

  if (activeTab === 'pie') {
    ChartSettings.defaults.global.legend.display = true;
  }

  return (
    <div className="container">
      <div className={styles.tabLinks}>
        <button
          className={styles.tabButton}
          type="button"
          onClick={() => setActiveTab('bar')}
        >{`График расходов в ${currencySign}`}</button>
        <button
          className={styles.tabButton}
          type="button"
          onClick={() => setActiveTab('pie')}
        >
          График расходов в %
        </button>
      </div>

      {activeTab === 'bar' && <BarChart currentCategory={currentCategory} />}
      {activeTab === 'pie' && <PieChart currentCategory={currentCategory} />}
    </div>
  );
};

export default Chart;
