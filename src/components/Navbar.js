import React, { Component } from 'react';
import logo from '../images/aura-children-logov2.png';
// npm install react-icons lets you use icons from popular sites such as Font Awesome without having to download the icon directly
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class Navbar extends
Component {
  state={
    isOpen:false
  };
  handleToggle = () => {
  this.setState({isOpen: !this.state.isOpen})
  };
  render() {
    return <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src = {logo} alt="Aura Children" width="55px"/>
          </Link>
          <button type="button" className="nav-btn" onClick={this.handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>

        <ul className={this.state.isOpen?"nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/workshops">Workshops</Link>
          </li>
        </ul>
      </div>
    </nav>
  };
}