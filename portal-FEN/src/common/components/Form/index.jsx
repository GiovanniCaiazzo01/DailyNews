import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import Select from "react-select";
import "./style.css";
const Form = ({
  header,
  field,
  onSubmit,
  onUserInput,
  btnLabel,
  btnType,
  haveSelect,
  selectData,
  upperSelect,
  defaultSelectValue,
}) => {
  const handleSubmit = (e) => {
    onSubmit(e);
  };
  const handleUserInput = (name, value) => {
    onUserInput(name, value);
  };

  const handleUserSelect = (e) => {
    onUserInput("language", e.label);
  };

  return (
    // <section className="form" style={{ backgroundImage: `url(${bg})` }}>
    <div id="form-container">
      <div className="form-header">{header}</div>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs-container">
          {field.map((f) => {
            return (
              <>
                <div className="form-input-upper-label" key={f.upperLabel}>
                  {f.upperLabel}
                </div>
                <Input
                  label={f.label}
                  type={f.type}
                  name={f.name}
                  onUserInput={handleUserInput}
                  value={f.value}
                />
              </>
            );
          })}
          {haveSelect && (
            <>
              <div className="form-input-upper-label">{upperSelect}</div>
              <div style={{ color: "black" }}>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  options={selectData}
                  onChange={handleUserSelect}
                  defaultInputValue={defaultSelectValue}
                />
              </div>
            </>
          )}
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
