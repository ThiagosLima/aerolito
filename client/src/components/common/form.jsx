import React, { Component } from "react";
import Joi from "joi-browser";
import Select from "react-select";
import Input from "./input";
import TextArea from "./textArea";
// import Select from "./select";
import ProgressBar from "../progressBar";

class Form extends Component {
  state = {
    uploadPercentage: 0,
    uploadFileName: "",
    data: {},
    errors: {}
  };

  handleProgressBar = (uploadPercentage, uploadFileName) => {
    this.setState({ uploadPercentage, uploadFileName });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  handleFileChange = ({ target }) => {
    console.log(target.files[0]);
    this.setState({ file: target.files[0] });
  };

  handleMultipleFileChange = ({ target }) => {
    this.setState({ files: target.files });
  };

  handleSelect = (selected, name) => {
    const selectedIds = selected.map(item => item._id);
    let data = { ...this.state.data };
    data[name] = selectedIds;
    this.setState({ data });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn form__button">
        {label}
      </button>
    );
  }

  // renderSelect(name, label, options) {
  //   const { data, errors } = this.state;

  //   return (
  //     <Select
  //       name={name}
  //       value={data[name]}
  //       label={label}
  //       options={options}
  //       onChange={this.handleChange}
  //       error={errors[name]}
  //     />
  //   );
  // }

  renderInput(name, label, position = "", type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        placeholder={label}
        position={position}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderCheckbox(name, label, options) {
    return (
      <div className="form-group">
        <Select
          placeholder={label}
          isMulti
          name={name}
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          getOptionValue={option => option["_id"]}
          onChange={selected => this.handleSelect(selected, name)}
        />
      </div>
    );
  }

  renderTextArea(name, label, rows, position = "") {
    const { data, errors } = this.state;

    return (
      <TextArea
        name={name}
        rows={rows}
        value={data[name]}
        placeholder={label}
        position={position}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderProgressBar() {
    const percentage = this.state.uploadPercentage;
    const fileName = this.state.uploadFileName;
    let display = percentage ? "" : "none";

    return (
      <ProgressBar
        display={display}
        percentage={percentage}
        fileName={fileName}
      />
    );
  }

  renderFileInput(name, accept, multiple = false, type = "file") {
    return (
      <span className="custom-file form__input-container">
        <label htmlFor={name} className="custom-file-label form__input">
          {this.getFileInputLabel(name, multiple)}
          <input
            className="custom-file-input form__input-label"
            title={name}
            id={name}
            type={type}
            accept={accept}
            multiple={multiple}
            onChange={
              multiple ? this.handleMultipleFileChange : this.handleFileChange
            }
          />
        </label>
      </span>
    );
  }

  getFileInputLabel(name, multiple) {
    const { file, files } = this.state;
    let label = "";

    if (multiple) {
      if (files) {
        for (const file of files) {
          label += `${file.name}, `;
        }
      } else {
        label = `Escolher arquivos para ${name}`;
      }
    } else {
      if (file) {
        label = file.name;
      } else {
        label = `Escolher arquivo para ${name}`;
      }
    }

    return label;
  }
}

export default Form;
