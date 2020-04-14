// Class base component, responsive navigation bar
import React, { Component } from 'react';
import logo from '../images/aura-children-light.png';
// npm install react-icons lets you use icons from popular sites such as Font Awesome without having to download the icon directly
import {FaAlignRight} from 'react-icons/fa';
// to link to correct URL
import {Link} from 'react-router-dom';

// creating navbar and making it responsive all in one!
export default class Navbar extends
Component {
// by default the mobile nav bar will not be opened
  state={
    isOpen:false
  };
  handleToggle = () => {
    //to open the nav bar clicking on the hamburger menu
  this.setState({isOpen: !this.state.isOpen})
  };
  render() {
    return <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* logo linked to homepage */}
          <Link to="/">
            <img src = {logo} alt="Aura Children" width="55px"/>
          </Link>
          <button type="button" className="nav-btn" onClick={this.handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
          {/* the links for the nav bar in the mobile view */}
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