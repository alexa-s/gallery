'use strict';

import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="menu">
        <nav className="navbar navbar-light">
          <button className="navbar-toggler hidden-md-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2" aria-controls="exCollapsingNavbar2" aria-expanded="false" aria-label="Toggle navigation">
            &#9776;
          </button>
          <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <a className="navbar-brand" href="/">
              <img className="logo img-responsive" src="/images/logo.png" alt="logo" />
            </a>
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Auto / Moto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Fashion / Glam</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

}

export default Menu;
