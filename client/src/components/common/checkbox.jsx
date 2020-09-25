import React, { useState, useEffect } from "react";
import Select from "react-select";

const Checkbox = ({
  name,
  label,
  options,
  defaultValue,
  position,
  onChange
}) => {
  // console.log(defaultValue);
  // const [defValues, setDefValues] = useState(defaultValue);
  // useEffect(() => {
  //   setDefValues(defaultValue);
  // }, [defaultValue]);

  return (
    <div className="form-group">
      <Select
        isMulti
        placeholder={label}
        name={name}
        options={options}
        defaultValue={defaultValue}
        className={`basic-multi-select ${position}`}
        classNamePrefix="select"
        getOptionValue={option => option["_id"]}
        onChange={selected => onChange(selected, name)}
      />
    </div>
  );
};

export default Checkbox;
