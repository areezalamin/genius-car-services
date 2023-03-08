import React from "react";
import { ToastContainer } from "react-bootstrap";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  let location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className="text-center">
        <h3 className="text-danger">Your Email is not Verified</h3>
        <h3 className="text-success">Please Verify your Email.</h3>
        <button
          className="btn-success"
          onClick={async () => {
            const success = await sendEmailVerification();
            if (success) {
              toast("Sent email");
            }
          }}
        >
          Send Verification
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
