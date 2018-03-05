import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const backgroundImage = require('../Assets/cover.jpg');

const style = {
  header: {
    height: '30rem',
    background: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.9)), url(${backgroundImage}) center 5%`,
    backgroundSize: 'cover',
  },
};

const Header = () => (
  <Container fluid>
    <Row className="justify-content-center align-items-center text-center" style={style.header}>
      <Col xs="auto">
        <h1 className="text-white display-1">I am Batman</h1>
      </Col>
    </Row>
  </Container>
);

export default Header;
