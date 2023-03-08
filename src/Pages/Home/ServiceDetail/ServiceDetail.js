import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const ServiceDetail = () => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const { ServiceId } = useParams();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to={from} replace />;
  }

  return (
    <div>
      <h1>This is Service Details: {ServiceId}</h1>
    </div>
  );
};

export default ServiceDetail;
