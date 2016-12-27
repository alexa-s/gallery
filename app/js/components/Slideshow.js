'use strict';

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class Slideshow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
      $('#slideshow > div:first')
        .fadeOut(3000)
        .next()
        .fadeIn(3000)
        .end()
        .appendTo('#slideshow');
    }, 5000);
  }

  render() {
    return (
      <div id="slideshow">
        <div>
          <img className="img-responsive col-xs-12" src="/images/homepage/1.jpg" alt="1" />
        </div>
        <div>
          <img className="img-responsive col-xs-12" src="/images/homepage/2.jpg" alt="2" />
        </div>
        <div>
          <img className="img-responsive col-xs-12" src="/images/homepage/3.jpg" alt="3" />
        </div>
      </div>
    );
  }

}

export default Slideshow;
