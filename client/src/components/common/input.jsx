import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group mb-0">
      <input
        {...rest}
        name={name}
        id={name}
        className="form-control form__input"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
