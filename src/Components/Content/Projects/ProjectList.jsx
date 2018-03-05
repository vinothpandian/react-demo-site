import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ProjectList = props => (
  <div>
    <h4> {props.content} </h4>

    {props.content === 'Fights' ? (
      <ListGroup>
        <ListGroupItem>With Joker: Arrested him</ListGroupItem>
        <ListGroupItem>With Bane: Captured Gotham back</ListGroupItem>
      </ListGroup>
    ) : (
      <ListGroup>
        <ListGroupItem>Attended Ra’s Al Ghul training</ListGroupItem>
        <ListGroupItem>Kidnapped Lau from China</ListGroupItem>
      </ListGroup>
    )}
  </div>
);

ProjectList.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ProjectList;
