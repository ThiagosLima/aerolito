import React from "react";
import Select from "react-select";

const Checkbox = ({ name, label, options, position, onChange }) => {
  return (
    <div className="form-group">
      <Select
        placeholder={label}
        isMulti
        name={name}
        options={options}
        className={`basic-multi-select ${position}`}
        classNamePrefix="select"
        getOptionValue={option => option["_id"]}
        onChange={selected => onChange(selected, name)}
      />
    </div>
  );
};

export default Checkbox;
