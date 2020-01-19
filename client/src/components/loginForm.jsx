import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import { login, getCurrentUser } from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .label("E-mail"),
    password: Joi.string()
      .required()
      .label("Senha")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await login(data.email, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = error.response.data;
        errors.password = error.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (getCurrentUser()) return <Redirect to="/" />;

    return (
      <section className="section section--light">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Senha", "password")}
          {this.renderButton("Login")}
        </form>
      </section>
    );
  }
}

export default LoginForm;
