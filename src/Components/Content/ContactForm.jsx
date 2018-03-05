import React, { Component } from 'react';
import validator from 'validator';
import { Form, FormGroup, Label, Col, Input, Button, Row, Alert } from 'reactstrap';
import SectionTitle from '../SectionTitle';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      message: '',
      alertVisibility: false,
      alertMessage: '',
    };

    this.nameChanged = this.nameChanged.bind(this);
    this.mailChanged = this.mailChanged.bind(this);
    this.messageChanged = this.messageChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameChanged(event) {
    this.setState({
      fullName: event.target.value,
    });
  }

  mailChanged(event) {
    this.setState({
      email: event.target.value,
    });
  }

  messageChanged(event) {
    this.setState({
      message: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { fullName, email, message } = this.state;

    if (
      validator.isAlpha(fullName) &&
      validator.isEmail(email) &&
      validator.isAlphanumeric(message)
    ) {
      // TODO: send form data
    } else {
      this.setState({
        alertMessage: 'Please fill all the details',
        alertVisibility: true,
      });
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} id="contactme" className="p-5">
        <SectionTitle title="Contact Me" />
        <FormGroup row>
          <Label for="fullName" xs={2}>
            Full Name
          </Label>
          <Col xs={10}>
            <Input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="eg. Bruce Wayne"
              value={this.state.fullName}
              onChange={this.nameChanged}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="emailID" xs={2}>
            Email
          </Label>
          <Col xs={10}>
            <Input
              type="email"
              name="emailID"
              id="emailID"
              placeholder="eg. bruce@wayne.org"
              value={this.state.email}
              onChange={this.mailChanged}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="textMessage" sm={2}>
            Message
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="message"
              id="textMessage"
              value={this.state.message}
              onChange={this.messageChanged}
            />
          </Col>
        </FormGroup>
        <Row className="justify-content-end">
          <Button size="lg" color="success">
            Send
          </Button>
        </Row>
        <Alert isOpen={this.state.alertVisibility} className="mt-5" color="danger">
          {this.state.alertMessage}
        </Alert>
      </Form>
    );
  }
}

export default ContactForm;
