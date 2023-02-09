import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    const email = emailRef.current.value;
    const Password = passwordRef.current.value;
    console.log(email, Password);
  };

  const handleAddToRegister = () => {
    console.log("I am working");
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
          <Form.Group md="6" controlId="validationCustom03">
            <Form.Label>Gmail</Form.Label>
            <Form.Control
              ref={emailRef}
              type="Email"
              placeholder="Please Enter a valid Email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="3" controlId="validationCustom04">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="Password"
              placeholder="Please Enter a valid Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Submit</Button>
          <p>
            New to Genius Car?
            <Link
              to="/Register"
              className="text-danger text-decoration-none"
              // onClick={handleAddToRegister}
            >
              Please Register
            </Link>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
