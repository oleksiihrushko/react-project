import React, { Component } from 'react';

import { connect } from 'react-redux';
import exchangeRatesSelectors from '../../redux/exchange/exchangeRatesSelectors';
import moment from 'moment';

import styles from './ExchangeRates.module.css';

class ExchangeRates extends Component {
  state = {
    date: '',
  };

  componentDidMount() {
    const currentTime = moment().format();
    this.setState({
      date: currentTime,
    });
  }

  render() {
    const { exchangeRates } = this.props;
    console.log(exchangeRates);

    const { date } = this.state;

    return (
      <>
        <div className={`${styles.ExchangeRatesWrapper} container`}>

          <table className={styles.table}>
          <caption className="text-danger">
            <span>курс валют на: {date && moment(date).format('L')}</span>
          </caption>

          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>Валюта</th>
              <th className={styles.th}>курс покупки</th>
              <th className={styles.th}>курс продажи</th>
            </tr>
          </thead>
          <tbody>
            {exchangeRates.map(currency => (
              <tr key={currency.ccy} className={styles.tr}>
                <td className={styles.td}>{currency.ccy}</td>
                <td className={styles.td}>{currency.buy}</td>
                <td className={styles.td}>{currency.sale}</td>
              </tr>
            ))}
          </tbody>
          </table>
          <h4 className={styles.title}>* курс биткоина указан в USD</h4>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    exchangeRates: exchangeRatesSelectors.getExchangeRates(state),
    isLoadingExhangeRates: exchangeRatesSelectors.getLoading(state),
  };
};

export default connect(mapStateToProps)(ExchangeRates);
