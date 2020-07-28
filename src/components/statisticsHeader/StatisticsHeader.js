import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/uk';

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
    const { date, currentDate } = this.state;
    return (
      <div>
        <h2>Statictics header</h2>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <div>
          <p>Текущий период</p>
          <div>
            <button
              type="button"
              name="prevMonthBtn"
              onClick={this.handleChangeMonth}
            >
              Prev month
            </button>
            <p>{date && moment(date).format(' MMMM YYYY')}</p>
            <button
              type="button"
              name="nextMonthBtn"
              onClick={this.handleChangeMonth}
            >
              Next month
            </button>
          </div>
        </div>
        <div>
          <p>
            Баланс на{' '}
            <span>{date && moment(date).format('DD MMMM YYYY')} року:</span>
          </p>
        </div>
      </div>
    );
  }
}

export default StatisticsHeader;
