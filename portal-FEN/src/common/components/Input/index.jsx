import React, { useState } from "react";
import "./style.css";

const Input = ({ label, type, name, onUserInput }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const onType = (name, value) => {
    onUserInput(name, value);
    if (value === "") {
      setShowPlaceholder(false);
    } else {
      setShowPlaceholder(true);
    }
  };

  const onFocus = () => {
    if (!showPlaceholder) {
      setShowPlaceholder(true);
    }
  };

  return (
    <div className={showPlaceholder ? "input" : " input input-error"}>
      <input
        name={name}
        type={type}
        placeholder={showPlaceholder ? label : "Please fill this field"}
        onChange={(e) => onType(e.target.name, e.target.value)}
        onFocus={onFocus}
      />
    </div>
  );
};

export { Input };
