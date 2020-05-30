import React from "react";

const TextArea = ({ name, label, error, position, ...rest }) => {
  return (
    <div className="form-group mb-0">
      <textarea
        {...rest}
        name={name}
        id={name}
        className={`form-control form__input ${position}`}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
