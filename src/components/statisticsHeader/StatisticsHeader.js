import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { ReactComponent as ArrowBack } from './arrowBack/back.svg';
import { ReactComponent as PrevMonth } from './arrowBack/leftArrow.svg';
import { ReactComponent as NextMonth } from './arrowBack/rightArrow.svg';
import styles from './StatisticsHeader.module.css';
// import Media from 'react-media';

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
      <div  className={`${styles.statisticsHeader} container`}>
        <h2>Statictics header</h2>

        <button
          className={styles.button}
          type="button"
          onClick={this.handleGoBack}
        >
          <ArrowBack />
          На главную
        </button>
        <div>
          <p>Текущий период</p>
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
          <p>
            Баланс на <span>{date && moment(date).format('L')}:</span>
          </p>
          <div className={styles.statisticsHeaderBalance}>
            <span className={styles.statisticsSpan}>1111 UAH</span>
          </div>
        </div>
      </div>
    );
  }
}

export default StatisticsHeader;
