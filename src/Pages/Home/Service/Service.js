import React from "react";
import "../Service/Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="service">
      <img src={img}></img>
      <h2>Service name :{name}</h2>
      <h3>Price : {price}</h3>
      <p>
        <small>{description}</small>
        <br></br>
        <button className="btn btn-primary">Books: {name}</button>
      </p>
    </div>
  );
};

export default Service;
