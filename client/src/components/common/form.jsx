import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import TextArea from "./textArea";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {}
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

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        placeholder={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderTextArea(name, label, rows) {
    const { data, errors } = this.state;

    return (
      <TextArea
        name={name}
        rows={rows}
        value={data[name]}
        placeholder={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderFileInput(name, accept, multiple = false, type = "file") {
    return (
      <div>
        <div className="custom-file">
          <input
            className="custom-file-input"
            id={name}
            type={type}
            accept={accept}
            multiple={multiple}
            onChange={
              multiple ? this.handleMultipleFileChange : this.handleFileChange
            }
          />
          <label className="custom-file-label" htmlFor={name}>
            {this.getFileInputLabel(name, multiple)}
          </label>
        </div>
      </div>
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
