import React from "react";
import { Loader } from "../Loader";
import "./style.css";
const Button = ({ label, type, name, onClick, loading }) => {
  return (
    <div>
      <button
        className={`button normal-btn ${loading ? "disabled" : ""}`}
        name={name}
        type={type}
        onClick={onClick}
        disabled={loading ? true : false}
      >
        {loading ? "" : label}
        {loading && <Loader />}
      </button>
    </div>
  );
};

export { Button };
