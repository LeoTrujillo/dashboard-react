import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render () {
    return (
      <div className="menu">
        <a className="item-menu" href="#">Default</a>
        <a className="item-menu" href="#">New 1</a>
        <button className="item-menu btn">+ Add dashboard</button>
      </div>
    );
  }
}

export default Navbar;