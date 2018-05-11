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
        <img src="https://picsum.photos/100/100/?random" alt="new" />
        {this.state.data.name}
        <p>{this.state.data.content}</p>
      </div>
    );
  }
}

export default Chart;