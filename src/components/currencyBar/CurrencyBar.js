import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import exchangeRatesSelectors from '../../redux/exchange/exchangeRatesSelectors';
import exchangeRatesActions from '../../redux/exchange/exchangeRatesActions';

import styles from './CurrencyBar.module.css';

import { ReactComponent as Currency } from './img/currency.svg';
import { ReactComponent as Uah } from './img/hryvnia.svg';
import { ReactComponent as Usd } from './img/dollar.svg';
import { ReactComponent as Eur } from './img/euro.svg';
import { ReactComponent as Btc } from './img/bitcoin.svg';

class currencyBar extends Component {
  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  handleClickOpen = () => {
    this.toggleOpen();
  };

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
    return (
      <>
        <div className={styles.currencyButton} onClick={this.handleClickOpen}>
          <Currency />

          {this.state.open && (
            <ul className={styles.popover}>
              <li className={styles.menuItem}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={this.handleChangeUAH}
                >
                  <Uah />
                </button>
              </li>
              <li className={styles.menuItem}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={this.handleChangeUSA}
                >
                  <Usd />
                </button>
              </li>
              <li className={styles.menuItem}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={this.handleChangeEUR}
                >
                  <Eur />
                </button>
              </li>
              <li className={styles.menuItem}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={this.handleChangeBTC}
                >
                  <Btc />
                </button>
              </li>
            </ul>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    exchangeCurrency: exchangeRatesSelectors.getCurrentCurrency(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onShowUSA: () => dispatch(exchangeRatesActions.currentCurrencyUSA()),
  onShowUAH: () => dispatch(exchangeRatesActions.currentCurrencyUAH()),
  onShowEUR: () => dispatch(exchangeRatesActions.currentCurrencyEUR()),
  onShowBTC: () => dispatch(exchangeRatesActions.currentCurrencyBTC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(currencyBar);
