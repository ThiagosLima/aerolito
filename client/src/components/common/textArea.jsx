import React from "react";

const TextArea = ({ name, label, rows, error, ...rest }) => {
  return (
    <div className="form-group mb-0">
      <textarea
        {...rest}
        name={name}
        id={name}
        rows={rows}
        className="form-control form__input"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
