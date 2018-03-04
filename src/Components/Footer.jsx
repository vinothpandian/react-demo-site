import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => (
  <footer className="footer">
    <Row className="justify-content-center align-items-center h-100">
      <Col xs="auto">
        <h6 className="text-white">
          Created by <a href="http://vinothpandian.me">Vinoth Pandian</a>
        </h6>
      </Col>
    </Row>
  </footer>
);

export default Footer;
