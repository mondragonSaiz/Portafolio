import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './css/contact.css';

import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';

function Contact() {
  const ctx = useContext(ThemeContext);
  const { themeGlobalState } = ctx;

  const [validated, setValidated] = useState(false);
  const themeTextColor = {
    color: themeGlobalState.darkTheme ? 'white' : '#363537',
    height: '100vh',
    margin: ' 0% 15% 0 15%',
    paddingTop: '5%',
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={themeTextColor}
    >
      <Row className="mb-3">
        <h1>Contact</h1>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First and last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="someone@gmail.com" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>Message: </Form.Label>
        <Form.Control className="message_input" type="text" required />
        <Form.Control.Feedback type="invalid">
          Please provide a message
        </Form.Control.Feedback>
      </Form.Group>
      <Button style={{ marginTop: '2%' }} type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
