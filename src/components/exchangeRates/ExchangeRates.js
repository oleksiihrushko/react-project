import React, { Component } from "react";

import { connect } from "react-redux";
import exchangeRatesOperations from "../../redux/exchange/exchangeRatesOperations";
import exchangeRatesSelectors from "../../redux/exchange/exchangeRatesSelectors";
import exchangeRatesActions from "../../redux/exchange/exchangeRatesActions";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import styles from "./ExchangeRates.module.css";

class ExchangeRates extends Component {
  state = {
    date: "",
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
          <h6>курс валют на: {date && moment(date).format("L")}</h6>
          <Table responsive striped bordered hover variant="light">
            <caption className="text-danger">
              <span>* курс биткоина указан в USD</span>
            </caption>
            <thead>
              <tr>
                <th>Валюта</th>
                <th>курс покупки</th>
                <th>курс продажи</th>
              </tr>
            </thead>
            <tbody>
              {exchangeRates.map((currency) => (
                <tr key={currency.ccy}>
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

const mapStateToProps = (state) => {
  return {
    exchangeRates: exchangeRatesSelectors.getExchangeRates(state),
    isLoadingExhangeRates: exchangeRatesSelectors.getLoading(state),
  };
};

export default connect(mapStateToProps)(ExchangeRates);
