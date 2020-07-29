import React, { Component } from 'react';

import { connect } from 'react-redux';
import exchangeRatesOperations from '../../redux/exchange/exchangeRatesOperations';
import exchangeRatesSelectors from '../../redux/exchange/exchangeRatesSelectors';

class ExchangeRates extends Component {
  componentDidMount() {
    this.props.onFetchEchangeRates()
  }

  render() {
    const {exchangeRates} = this.props
    console.log(exchangeRates)
    return (
    <div className={`container`} >
      {exchangeRates.map(currency =>(
        <li>
          <p>{currency.ccy} покупка <span>{currency.buy} продажа <span>{currency.sale}</span></span></p>
        </li>
      ))}
    </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    exchangeRates: exchangeRatesSelectors.getExchangeRates(state),
    isLoadingExhangeRates: exchangeRatesSelectors.getLoading(state),
  };
};

const mapDispatchToProps = dispatch => ({
    onFetchEchangeRates: ()=> dispatch(exchangeRatesOperations.fetchCurrentExchangeRates())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRates)