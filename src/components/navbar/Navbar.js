import React, { Component } from 'react';
import './Navbar.css';

const navs = ['Default']

function NavsList(props) {
  const items = props.navs;
  const listNavs = items.map(item =>
    <a className="item-menu" href="/" key={Math.random().toString()}>{item}</a>
  )

  return (
    <div className="menu">
      {listNavs}
      <button className="btn item-menu"> + </button>
    </div>
  );
}

class Navbar extends Component {
  render () {
    return (
      <div>
        <NavsList navs={navs}/>
      </div>
    );
  }
}

export default Navbar;
