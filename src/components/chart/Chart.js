import React, { Component } from 'react';
import './Chart.css';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.value}
  }
  render() {
    return (
      <div className="item-chart">
        {this.state.data.name}
        <p>{this.state.data.content}</p>
      </div>
    );
  }
}

export default Chart;