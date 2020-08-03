import React, { Component } from 'react';

import StatisticsHeader from '../../components/statisticsHeader/StatisticsHeader';
import ExchangeRates from '../../components/exchangeRates/ExchangeRates';

class StaticticsPage extends Component {
  render() {
    //   console.log(this.props)
    return (
      <div>
        <StatisticsHeader balance={() => {}} {...this.props} />
        <ExchangeRates />
      </div>
    );
  }
}
export default StaticticsPage;
