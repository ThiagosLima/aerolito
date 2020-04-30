import React from "react";

const Input = ({ name, label, error, position, ...rest }) => {
  return (
    <div className="form-group mb-0">
      <input
        {...rest}
        name={name}
        id={name}
        className={`form-control form__input ${position}`}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
