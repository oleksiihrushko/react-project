import React, { Component } from 'react';

import { connect } from 'react-redux';
import exchangeRatesSelectors from '../../redux/exchange/exchangeRatesSelectors';
import exchangeRatesActions from '../../redux/exchange/exchangeRatesActions';


import styles from './CurrencyBar.module.css';

import { ReactComponent as Uah } from '../../ui/statisticsPage/currencyBar/hryvnia.svg';
import { ReactComponent as Usd } from '../../ui/statisticsPage/currencyBar/dollar.svg';
import { ReactComponent as Eur } from '../../ui/statisticsPage/currencyBar/euro.svg';

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


  render() {
    return (
      <>
        <div className={styles.currencyBar} onClick={this.handleClickOpen}>
    
          <p className={styles.buttonText}>Валюта</p>
          {this.state.open && (
            <ul className={styles.popover}>
              <li className={styles.menuItem} onClick={this.handleChangeUAH}>
                <Uah className={styles.changeColorSvgCurrency} />
              </li>
              <li className={styles.menuItem} onClick={this.handleChangeUSA}>
                <Usd className={styles.changeColorSvgCurrency} />
              </li>
              <li className={styles.menuItem} onClick={this.handleChangeEUR}>
                <Eur className={styles.changeColorSvgCurrency} />
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
