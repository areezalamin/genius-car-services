import { async } from "@firebase/util";
import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);
  const [validated, setValidated] = useState(false);
  // const [agree, setAgree] = useState(false);
  const [artifitialError, setError] = useState("");
  const navigate = useNavigate();

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    console.log(email, password);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);

    if (loading) {
      return <Loading></Loading>;
    }
    if (user) {
      console.log(user);
    }

    if (confirmPassword !== password) {
      setError("** Please provide same password **");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/Home");
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
            <Form.Control
              ref={nameRef}
              type="text"
              placeholder="Name"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="3" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              ref={emailRef}
              type="Email"
              placeholder="Email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="3" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="Password"
              placeholder="Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="3" controlId="validationCustom04">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              ref={confirmPasswordRef}
              type="Password"
              placeholder="Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>
          <p className="text-danger">{artifitialError}</p>
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
          <h5 className="text-danger">{error?.message}</h5>
        </Form>
      </div>
      <SocialLogin></SocialLogin>
    </Container>
  );
};

export default Register;
