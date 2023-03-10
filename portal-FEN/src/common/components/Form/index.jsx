import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import "./style.css";
const Form = ({ header, field, onSubmit, onUserInput, btnLabel, btnType }) => {
  const handleSubmit = (e) => {
    onSubmit(e);
  };
  const handleUserInput = (name, value) => {
    onUserInput(name, value);
  };
  return (
    // <section className="form" style={{ backgroundImage: `url(${bg})` }}>
    <div className="form-container">
      <div className="form-header">{header}</div>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs-container">
          {field.map((f) => {
            return (
              <>
                <div className="form-input-upper-label">{f.upperLabel}</div>
                <Input
                  label={f.label}
                  type={f.type}
                  name={f.name}
                  onUserInput={handleUserInput}
                />
              </>
            );
          })}
          <div className="form-footer">
            <Button label={btnLabel} type={btnType} />
          </div>
        </div>
      </form>
    </div>
    // </section>
  );
};

export { Form };
