import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartSettings } from 'react-chartjs-2';
import { getCurrencySign, getFilteredData } from './helpers';
import BarChart from './BarChart';
import PieChart from './PieChart';
import styles from './Chart.module.css';

const Chart = ({ currentCategory }) => {
  const [activeTab, setActiveTab] = useState('bar');

  const currentCurrency = useSelector(
    state => state.exchangeRatesRoot.exchangeCurrency,
  );

  const currencySign = getCurrencySign(currentCurrency);

  const date = useSelector(state => state.statistics.month);
  const products = useSelector(state => state.operations.costs);

  const data = getFilteredData(currentCategory, date, products);

  if (activeTab === 'bar') {
    ChartSettings.defaults.global.legend.display = false;
  }

  if (activeTab === 'pie') {
    ChartSettings.defaults.global.legend.display = true;
  }

  const barTab = [styles.tabButton];
  const pieTab = [styles.tabButton];

  activeTab === 'bar'
    ? barTab.push(styles.btnActive)
    : pieTab.push(styles.btnActive);

  return Object.keys(data).length > 0 ? (
    <div className="container">
      <div className={styles.tabLinks}>
        <button
          className={barTab.join(' ')}
          type="button"
          onClick={() => setActiveTab('bar')}
        >{`График расходов в ${currencySign}`}</button>
        <button
          className={pieTab.join(' ')}
          type="button"
          onClick={() => setActiveTab('pie')}
        >
          График расходов в %
        </button>
      </div>

      {activeTab === 'bar' && <BarChart currentCategory={currentCategory} />}
      {activeTab === 'pie' && <PieChart currentCategory={currentCategory} />}
    </div>
  ) : null;
};

export default Chart;
