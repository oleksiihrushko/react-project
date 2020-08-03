import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import ModalExchangeRates from '../modal/ModalExchangeRates';

import { ReactComponent as ArrowBack } from './arrowBack/back.svg';
import { ReactComponent as PrevMonth } from './arrowBack/leftArrow.svg';
import { ReactComponent as NextMonth } from './arrowBack/rightArrow.svg';
import { ReactComponent as Exchange } from './img/exchange.svg';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import exchangeRatesSelectors from '../../redux/exchange/exchangeRatesSelectors';
import exchangeRatesActions from '../../redux/exchange/exchangeRatesActions';
import CurrencyBar from '../currencyBar/CurrencyBar';

import styles from './StatisticsHeader.module.css';
import Media from 'react-media';

class StatisticsHeader extends Component {
  state = {
    date: '',
    isShowModal: false,
  };

  componentDidMount() {
    const currentTime = moment().format();
    this.setState({
      date: currentTime,
      //   currentDate: currentTime,
    });
  }

  handleChangeMonth = ({ target }) => {
    const { name } = target;
    const { date } = this.state;
    if (name === 'prevMonthBtn') {
      this.setState({
        date: moment(date).add(-1, 'month').format(),
      });
    }
    if (name === 'nextMonthBtn') {
      this.setState({
        date: moment(date).add(1, 'month').format(),
      });
    }
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  openModal = () => {
    this.setState({ isShowModal: true });
  };

  render() {
    // const { exchangeCurrency } = this.props;
    // console.log(exchangeCurrency);
    const { date } = this.state;
    return (
      <div className={`${styles.statisticsHeaderWrapper} container`}>
        <div className={styles.leftBar}>
          <div className={styles.buttonGoBack}>
            <Link to="/">
              <ArrowBack />
            </Link>
            <Media query="(min-width: 768px)">
              {matches =>
                matches ? (
                  <p className={styles.buttonText}>На главную</p>
                ) : (
                  <p></p>
                )
              }
            </Media>
          </div>

          <div className={styles.currencyBar}>
            <CurrencyBar />
            <Media query="(min-width: 768px)">
              {matches =>
                matches ? <p className={styles.buttonText}>Валюта</p> : <p></p>
              }
            </Media>
          </div>

          <div className={styles.exchangeRates}>
            {this.state.isShowModal && (
              <ModalExchangeRates closeModal={this.closeModal} />
            )}
            <button
              className={styles.button}
              type="button"
              onClick={this.openModal}
            >
              <Exchange />
            </button>
            <Media query="(min-width: 768px)">
              {matches =>
                matches ? <p className={styles.buttonText}>Курс</p> : <p></p>
              }
            </Media>
          </div>
        </div>
        <div className={styles.rightBar}>
          <div className={styles.calendarWrapper}>
            <Media query="(min-width: 768px)">
              {matches =>
                matches ? (
                  <p className={styles.buttonText}>Текущий период</p>
                ) : (
                  <p></p>
                )
              }
            </Media>

            <div className={styles.calendarContainer}>
              <button
                className={styles.button}
                type="button"
                name="prevMonthBtn"
                onClick={this.handleChangeMonth}
              >
                <PrevMonth />
              </button>
              <p className={styles.calendarText}>
                {date && moment(date).format(' MMMM YYYY')}
              </p>
              <button
                className={styles.button}
                type="button"
                name="nextMonthBtn"
                onClick={this.handleChangeMonth}
              >
                <NextMonth />
              </button>
            </div>
          </div>

          <div>
            <div>
              <p className={styles.balance}>
                Баланс на <span>{date && moment(date).format('L')}:</span>
              </p>
              <div className={styles.statisticsHeaderBalance}>
                <span className={styles.statisticsSpan}>1111 UAH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsHeader);

{
  /* <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            type="button"
            onClick={this.handleGoBack}
          >
            <ArrowBack />
          </button>
          <Media query="(min-width: 768px)">
            {matches => (matches ? <p>На главную</p> : <p></p>)}
          </Media>
        </div> */
}

{
  /* <div className={styles.buttonContainer}>

              <CurrencyBar /> */
}

{
  /* <Media query="(min-width: 768px) and (max-width: 1100px)">
              {matches => (matches ? <p>Курс валют</p> : <p></p>)}
            </Media> */
}
{
  /* <Media query="(max-width: 1100px)">
              <button className={styles.button} type="button">
                <Exchange />
              </button>
            </Media> */
}
{
  /* </div> */
}

{
  /* <div className={styles.balanceContainer}>
            <p className={styles.balance}>
              Баланс на <span>{date && moment(date).format('L')}:</span>
            </p>
            <div className={styles.statisticsHeaderBalance}>
              <span className={styles.statisticsSpan}>1111 UAH</span>
            </div>
          </div> */
}
