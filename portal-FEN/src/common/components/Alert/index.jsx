import React from "react";
import "./style.css";

const Alert = ({ message, type }) => {
  console.log(message);
  return (
    <div
      className="alert"
      style={{ backgroundColor: type ? "green" : "#ff3838ad" }}
    >
      <h3 className="alert-title">{type ? "Success" : "Mmmm"}</h3>
      <p className="alert-content">{message}</p>
    </div>
  );
};

export { Alert };
