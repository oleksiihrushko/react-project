import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { ReactComponent as ArrowBack } from './arrowBack/back.svg';
import { ReactComponent as PrevMonth } from './arrowBack/leftArrow.svg';
import { ReactComponent as NextMonth } from './arrowBack/rightArrow.svg';
import styles from './StatisticsHeader.module.css';
import Media from 'react-media';

class StatisticsHeader extends Component {
  state = {
    date: '',
    // currentDate: '',
  };

  componentDidMount() {
    const currentTime = moment().format();
    this.setState({
      date: currentTime,
      //   currentDate: currentTime,
    });
  }
  //   componentDidUpdate(){
  //       const currentTime = moment().format();
  //       this.setState({currentDate: currentTime})
  //   }

  handleGoBack = () => {
    this.props.history.push('/');
  };

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

  render() {
    // console.log(this.state.date);
    const { date } = this.state;
    return (
      <div className={`${styles.statisticsHeader} container`}>
        <div className={styles.buttonContainer}>
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
        </div>
        <div className={styles.miniContainer}>
          <div className={styles.calendarWrapper}>
            <Media query="(min-width: 768px)">
              {matches => (matches ? <p>Текущий период</p> : <p></p>)}
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
          <div className={styles.balanceContainer}>
            <p className={styles.balance}>
              Баланс на <span>{date && moment(date).format('L')}:</span>
            </p>
            <div className={styles.statisticsHeaderBalance}>
              <span className={styles.statisticsSpan}>1111 UAH</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatisticsHeader;
