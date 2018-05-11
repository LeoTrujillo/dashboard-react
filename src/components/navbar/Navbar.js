import React, { Component } from 'react';
import './Navbar.css';

const navs = ['Default']

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { navs: navs }
    this.addNav = this.addNav.bind(this);
  }

  addNav() {
    let c = this.state.navs;
    c = [...c, 'Nuevo'];
    this.setState(prevState => ({ navs: c}));
  }

  render () {
    const listItems = this.state.navs.map(item =>
      <a className="item-menu" href="/" key={Math.random().toString()}>{item}</a>
    );
    return (
      <div className="menu">
        {listItems}
        <button className="btn item-menu" onClick={this.addNav}> + </button>
      </div>
    );
  }
}

export default Navbar;
