import React from 'react';
import { Row, Col } from 'reactstrap';
import SectionTitle from '../SectionTitle';

const Introduction = () => (
  <Row className="justify-content-center p-5">
    <SectionTitle title="About Me" />
    <Col className="text-justify" xs="12">
      I, who witnessed the murder of my multi-millionaire parents as a child, swore to avenge their
      deaths. I have trained extensively to achieve mental and physical perfection, mastering
      martial arts, detective skills, and criminal psychology. Costumed as a bat to prey on
      criminals’s fears, and utilizing a high-tech arsenal, I have become the legendary Batman.
    </Col>
  </Row>
);

export default Introduction;
