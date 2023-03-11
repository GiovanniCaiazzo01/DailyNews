import React from "react";
import "./style.css";
const Alert = ({ message }) => {
  console.log("sono allert mi hanno chiamato", message);
  return (
    <div className="alert alert-3-danger">
      <h3 className="alert-title">Arg..</h3>
      <p className="alert-content">{message}</p>
    </div>
  );
};

export { Alert };
