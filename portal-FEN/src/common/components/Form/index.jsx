import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { CustomSelect } from "../CustomSelect";
import "./style.css";

const Form = ({
  header,
  field,
  onSubmit,
  onClick,
  onUserInput,
  btnLabel,
  btnType,
  haveSelect,
  haveSecondBtn,
  secondBtnLabel,
  selectData,

  loading,
}) => {
  const handleSubmit = (e) => {
    onSubmit(e);
  };
  const handleUserInput = (name, value) => {
    onUserInput(name, value);
  };

  const handleUserSelect = (e) => {
    console.log(e);
    onUserInput("language", e.label);
  };

  return (
    // <section className="form" style={{ backgroundImage: `url(${bg})` }}>
    <div id="form-container">
      <div className="form-header">{header}</div>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs-container">
          {field &&
            field.map((f) => {
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
                    loading={loading}
                  />
                </>
              );
            })}
          {haveSelect &&
            selectData &&
            selectData.map((data) => {
              return (
                <CustomSelect
                  data={data[`${data.objName}`]}
                  label={data.label}
                  defaultValue={data.defaultValue}
                  onChange={(e) => handleUserSelect(e)}
                />
              );
            })}
          <div className="form-footer">
            <Button
              label={btnLabel}
              type={btnType}
              name={btnLabel.toLowerCase()}
              onClick={onClick}
              loading={loading}
            />
          </div>
          {haveSecondBtn && (
            <div className="form-footer">
              <Button
                label={secondBtnLabel}
                name={secondBtnLabel.toLowerCase()}
                type={btnType}
                onClick={onClick}
              />
            </div>
          )}
        </div>
      </form>
    </div>
    // </section>
  );
};

export { Form };
