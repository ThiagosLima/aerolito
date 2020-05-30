import React from "react";

const InputFile = ({ name, label, error, ...rest }) => {
  return (
    // <div>
    //     <h6>{name}</h6>
    //     <input onChange={this.handleFileChange} type={type} accept={accept} />
    //   </div>
    // <div className="form-group">
    //   {/* <label htmlFor={name}>{label}</label> */}
    //   <input {...rest} name={name} id={name} className="form-control" />
    //   {error && <div className="alert alert-danger">{error}</div>}
    // </div>

    <div className="custom-file mb-0">
      <input
        {...rest}
        type="file"
        className="custom-file-input"
        id={name}
        name="filename"
      />
      {/* <label className="custom-file-label" htmlFor={name}>
        Choose file
      </label> */}
    </div>
  );
};

export default InputFile;
