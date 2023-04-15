import React from "react";
import "./style.css";
const Loader = ({ loading }) => {
  return (
    loading && (
      <div className="loader-container">
        <div id="loader"></div>
      </div>
    )
  );
};

export { Loader };
