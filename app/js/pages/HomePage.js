'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col } from 'reactstrap';
import DocumentTitle from 'react-document-title';
import Slideshow from '../components/Slideshow.js';
import Menu from '../components/Menu.js';

const propTypes = {
  currentUser: React.PropTypes.object
};

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Menu />
          <Slideshow />
        </Row>
      </div>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;
