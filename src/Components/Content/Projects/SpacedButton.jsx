import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const SpacedButton = props => (
  <Button id={props.children} onClick={props.onClick} className="mr-3">
    {props.children}
  </Button>
);

SpacedButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SpacedButton;
