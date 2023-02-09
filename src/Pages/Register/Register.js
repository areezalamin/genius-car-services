import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      <div className=" d-flex justify-content-center">
        <Form
          className="w-50"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group md="6" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="3" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Email" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="3" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="3" controlId="validationCustom04">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="Password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
          <p>
            Already have an Account?
            <Link
              to="/Login"
              className="text-danger text-decoration-none"
              //   onClick={handleAddToRegister}
            >
              Please Login
            </Link>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
