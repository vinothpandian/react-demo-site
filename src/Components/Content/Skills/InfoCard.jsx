import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, Col } from 'reactstrap';

const InfoCard = props => (
  <Col sm="4" className="pt-3">
    <Card className="text-center">
      <CardHeader> {props.title} </CardHeader>
      <CardBody> {props.children} </CardBody>
    </Card>
  </Col>
);

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default InfoCard;
