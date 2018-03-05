import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody } from 'reactstrap';

const InfoCard = props => (
  <Card className="text-center">
    <CardHeader color="dark"> {props.title} </CardHeader>
    <CardBody>
      <img src={props.image} alt={props.title} width="128" />
    </CardBody>
  </Card>
);

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default InfoCard;
