import React from "react";
import AsyncSelect from "react-select/async";

const CustomSelect = ({ label, data, defaultValue, onChange }) => {
  return (
    <>
      <div className="form-input-upper-label">{label}</div>
      <div style={{ color: "black" }}>
        <AsyncSelect
          className="basic-single"
          classNamePrefix="select"
          options={data}
          onChange={onChange}
          defaultInputValue={defaultValue}
        />
      </div>
    </>
  );
};

export { CustomSelect };
