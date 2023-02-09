import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { ServiceId } = useParams();
  return (
    <div>
      <h1>This is Service Details.{ServiceId}</h1>
    </div>
  );
};

export default ServiceDetail;
