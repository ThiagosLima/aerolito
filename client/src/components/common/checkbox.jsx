import React from "react";

const Checkbox = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="input-group-text">
          {/* <div className="input-group-prepend">
            <label className="input-group-text" htmlFor={name}>
              {name}
            </label>
          </div> */}
          <span key={option._id}>
            <input
              type="checkbox"
              id={option._id}
              name={option.name}
              value={option._id}
            />
            <label htmlFor={option._id}>{option.name}</label>
          </span>
          {/* <input
            type="checkbox"
            aria-label="Checkbox for following text input"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
