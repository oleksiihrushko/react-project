import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import ModalExchangeRates from '../modal/ModalExchangeRates';

import { ReactComponent as ArrowBack } from '../../ui/statisticsPage/statisticsHeader/back.svg';
import { ReactComponent as PrevMonth } from '../../ui/statisticsPage/statisticsHeader/leftArrow.svg';
import { ReactComponent as NextMonth } from '../../ui/statisticsPage/statisticsHeader/rightArrow.svg';
import { ReactComponent as Exchange } from '../../ui/statisticsPage/statisticsHeader/exchange.svg';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import exchangeRatesSelectors from '../../redux/exchange/exchangeRatesSelectors';
import financeSelectors from '../../redux/finance/financeSelectors';
import CurrencyBar from '../currencyBar/CurrencyBar';
import exchangeRatesOperations from '../../redux/exchange/exchangeRatesOperations';
import statisticsSlice from '../../redux/statistics/statisticsSlice';

import styles from './StatisticsHeader.module.css';
import Media from 'react-media';

class StatisticsHeader extends Component {
  state = {
    date: '',
    isShowModal: false,
  };

  componentDidMount() {
    if (this.props.exchangeRates.length === 0) {
      this.props.onFetchEchangeRates();
    }

    const currentTime = moment().format();
    this.setState({
      date: currentTime,
    });
    const { setSelectedMonth } = this.props;
    const { date } = this.state;
    setSelectedMonth(date);
  }

  componentDidUpdate() {
    const { setSelectedMonth } = this.props;
    const { date } = this.state;
    setSelectedMonth(date);
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

  exchangeBalancePerCurrentCurrency = () => {
    if (this.props.exchangeCurrency[0]?.ccy === 'USD') {
      return this.props.balance / this.props.exchangeCurrency[0].buy;
    }
    if (this.props.exchangeCurrency[0]?.ccy === 'EUR') {
      return this.props.balance / this.props.exchangeCurrency[0].buy;
    } else {
      return this.props.balance;
    }
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  openModal = () => {
    this.setState({ isShowModal: true });
  };

  render() {
    const { exchangeCurrency } = this.props;
    console.log(exchangeCurrency);
    // console.log(object)
    const { date } = this.state;
    return (
      <div className={`${styles.statisticsHeaderWrapper} container`}>
        <div className={styles.leftBar}>
          <div className={styles.buttonGoBack}>
            <Link to="/">
              <ArrowBack className={styles.changeColorSvg} />
              <Media query="(min-width: 768px)">
                {matches =>
                  matches ? (
                    <p className={styles.buttonText}>На главную</p>
                  ) : (
                    <p></p>
                  )
                }
              </Media>
            </Link>
          </div>

          <div className={styles.currencyBar}>
            <CurrencyBar className={styles.changeColorSvg} />
          </div>
          <div className={styles.exchangeRates} onClick={this.openModal}>
            {this.state.isShowModal && (
              <ModalExchangeRates closeModal={this.closeModal} />
            )}
            <label>
              <Exchange className={styles.changeColorSvg} />

              <Media query="(min-width: 768px)">
                {matches =>
                  matches ? <p className={styles.buttonText}>Курс</p> : <p></p>
                }
              </Media>
            </label>
          </div>
        </div>
        <div className={styles.rightBar}>
          <div>
            <div>
              <p className={styles.balance}>
                Баланс на <span>{moment().format('L')}:</span>
              </p>
              <div className={styles.statisticsHeaderBalance}>
                <span className={styles.statisticsSpan}>
                  {Math.round(this.exchangeBalancePerCurrentCurrency())}{' '}
                  {exchangeCurrency[0] ? exchangeCurrency[0].ccy : 'UAH'}
                </span>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exchangeRates: exchangeRatesSelectors.getExchangeRates(state),
    isLoadingExhangeRates: exchangeRatesSelectors.getLoading(state),
    exchangeCurrency: exchangeRatesSelectors.getCurrentCurrency(state),
    balance: financeSelectors.getBalance(state),
  };
};

const mapDispatchToProps = dispatch => ({
  setSelectedMonth: data =>
    dispatch(
      statisticsSlice.actions.setSelectedMonthSuccess(moment(data).format('L')),
    ),
  onFetchEchangeRates: () =>
    dispatch(exchangeRatesOperations.fetchCurrentExchangeRates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsHeader);
