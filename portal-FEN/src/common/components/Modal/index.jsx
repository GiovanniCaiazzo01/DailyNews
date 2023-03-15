import React from "react";
import "./style.css";

const Modal = ({ label }) => {
  return (
    label && (
      <div id="modal-container">
        <div id="modal-header">{label}</div>
      </div>
    )
  );
};

export { Modal };
