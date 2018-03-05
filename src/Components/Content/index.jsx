import React from 'react';
import { Container } from 'reactstrap';
import Introduction from './Introduction';
import Skills from './Skills';
import Projects from './Projects';

const Content = () => (
  <Container>
    <Introduction />
    <Skills />
    <Projects />
  </Container>
);

export default Content;
