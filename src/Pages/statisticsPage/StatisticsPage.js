import React, { Component } from 'react';

import StatisticsHeader from '../../components/statisticsHeader/StatisticsHeader';

class StaticticsPage extends Component {

  
    render() {
    //   console.log(this.props)
    return (
      <div>
        <h2>Statistics Page</h2>
        <StatisticsHeader balance={()=> {}} {...this.props}/>
      </div>
    );
  }
}
export default StaticticsPage;


