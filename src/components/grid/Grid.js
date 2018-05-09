import React, { Component } from 'react';
import Chart from '../chart/Chart';
import './Grid.css';

let comps = [{
    id: 1,
    name: 'Mi chart 1',
    content: 'Description'
  },
  {
    id: 2,
    name: 'Mi chart 2',
    content: 'Description'
  },
  {
    id: 3,
    name: 'Mi chart 3',
    content: 'Description'
  },
];

function ChartList(props) {
  const items = props.comps;
  const listItems = items.map(item =>
    <Chart key={item.id.toString()} value={item} />
  );

  return (
    <div className="components-container">
      {listItems}
    </div>
  );
}

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { comps: comps };
    this.addComponent = this.addComponent.bind(this);
  }

  addComponent() {
    console.log('Agregamos un componente');
    this.setState(prevState => ({ comps: [...comps, {id:4, name:'New', description: 'new element'}]}))
    // this.setState(prevState => ({newComponent: !prevState.newComponent}))
  }

  render() {
    return (
      <div className="grid">
        <button className="btn-add" onClick={this.addComponent}>
          + Agregar componente
        </button>
        <ChartList comps={this.state.comps} />
      </div>
    );
  }
}

export default Grid;