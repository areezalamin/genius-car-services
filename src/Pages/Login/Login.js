import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import {
  useSendEmailVerification,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { async } from "@firebase/util";
import Loading from "../Shared/Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [validated, setValidated] = useState(false);

  const location = useLocation();

  let from = location.state?.form?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

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
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    const success = await sendPasswordResetEmail(email);
    if (success) {
      toast("Sent email");
    }
  };
  if (loading) {
    return <Loading></Loading>;
  }

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
            <Link to="/Register" className="text-danger text-decoration-none">
              Please Register
            </Link>
          </p>
          <p>
            Forgotten password:
            <button onClick={handleResetPassword} className="btn btn-link">
              Reset Password
            </button>
          </p>
        </Form>
        <ToastContainer></ToastContainer>
        <h5>{error?.message}</h5>
      </div>
      <div>
        <SocialLogin></SocialLogin>
      </div>
    </Container>
  );
};

export default Login;
