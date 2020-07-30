import React, { Component } from 'react';

import { connect } from 'react-redux';
import exchangeRatesOperations from '../../redux/exchange/exchangeRatesOperations';
import exchangeRatesSelectors from '../../redux/exchange/exchangeRatesSelectors';
import exchangeRatesActions from '../../redux/exchange/exchangeRatesActions';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

class ExchangeRates extends Component {
  state = {
    date: '',
  };

  componentDidMount() {
    this.props.onFetchEchangeRates();
    const currentTime = moment().format();
    this.setState({
      date: currentTime,
    });
  }

  handleChangeUSA = () => {
    this.props.onShowUSA();
  };

  handleChangeUAH = () => {
    this.props.onShowUAH();
  };

  handleChangeEUR = () => {
    this.props.onShowEUR();
  };

  handleChangeBTC = () => {
    this.props.onShowBTC();
  };

  render() {
    const { exchangeRates, exchangeCurrency } = this.props;
    console.log(exchangeRates);
    console.log(exchangeCurrency);
    const { date } = this.state;

    return (
      <>
        <button type="button" onClick={this.handleChangeUAH}>
          UAH
        </button>
        <button type="button" onClick={this.handleChangeUSA}>
          USD
        </button>
        <button type="button" onClick={this.handleChangeEUR}>
          EUR
        </button>
        <button type="button" onClick={this.handleChangeBTC}>
          BTC
        </button>
        <div className={`container`}>
          <h6>
            
            курс валют на: {date && moment(date).format('L')}
          </h6>
          <Table responsive striped bordered hover variant="light">
            <caption class="text-danger">
              <span>* курс биткоина указан в USD</span>
            </caption>
            <thead>
              <tr class="text-dark">
                <th>Валюта</th>
                <th>курс покупки</th>
                <th>курс продажи</th>
              </tr>
            </thead>
            <tbody class="text-dark">
              {exchangeRates.map(currency => (
                <tr>
                  <td>{currency.ccy}</td>
                  <td>{currency.buy}</td>
                  <td>{currency.sale}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    exchangeRates: exchangeRatesSelectors.getExchangeRates(state),
    isLoadingExhangeRates: exchangeRatesSelectors.getLoading(state),
    exchangeCurrency: exchangeRatesSelectors.getCurrentCurrency(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onFetchEchangeRates: () =>
    dispatch(exchangeRatesOperations.fetchCurrentExchangeRates()),
  onShowUSA: () => dispatch(exchangeRatesActions.currentCurrencyUSA()),
  onShowUAH: () => dispatch(exchangeRatesActions.currentCurrencyUAH()),
  onShowEUR: () => dispatch(exchangeRatesActions.currentCurrencyEUR()),
  onShowBTC: () => dispatch(exchangeRatesActions.currentCurrencyBTC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRates);
