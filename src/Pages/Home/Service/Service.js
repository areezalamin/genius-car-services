import React from "react";
import { useNavigate } from "react-router-dom";
import "../Service/Service.css";

const Service = ({ service }) => {
  const { name, id, img, description, price } = service;

  const navigate = useNavigate();
  const handleServiceButton = (id) => {
    navigate(`/Service/${id}`);
  };
  return (
    <div className="service">
      <img src={img}></img>
      <h2>Service name :{name}</h2>
      <h3>Price : {price}</h3>
      <p>
        <small>{description}</small>
        <br></br>
        <button
          onClick={() => handleServiceButton(id)}
          className="btn btn-primary"
        >
          Books: {name}
        </button>
      </p>
    </div>
  );
};

export default Service;
