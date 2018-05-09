import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Grid from './components/grid/Grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid />
      </div>
    );
  }
}

export default App;
