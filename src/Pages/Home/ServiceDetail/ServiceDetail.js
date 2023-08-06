import React from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";


const ServiceDetail = () => {
  const { ServiceId } = useParams();
  const [service] = useServiceDetail(ServiceId);

  return (
    <div className="text-center">
      <h1>This is Service Details: {service.name}</h1>
      <Link to={`/CheckOut/${ServiceId}`}>
      <button className="btn btn-success">Proceed checkOut</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
