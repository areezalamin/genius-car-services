import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    fetch("https://genius-car-service-server-kappa.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="Services">
      <h1 className="services-title mt-5">Our Services</h1>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
