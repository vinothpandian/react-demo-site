import React from 'react';
import { Container } from 'reactstrap';
import Introduction from './Introduction';
import Skills from './Skills';
import Projects from './Projects';
import ContactForm from './ContactForm';

const Content = () => (
  <Container>
    <Introduction />
    <Skills />
    <Projects />
    <ContactForm />
  </Container>
);

export default Content;
