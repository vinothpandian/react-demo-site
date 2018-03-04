import React from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';

const SectionTitle = props => (
  <Col className="text-center" xs="12">
    <h4> {props.title} </h4>
  </Col>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SectionTitle;
