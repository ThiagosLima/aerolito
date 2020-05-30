import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { Container } from "react-grid-system";
import Form from "./common/form";
import { login, getCurrentUser } from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string().required().label("E-mail"),
    password: Joi.string().required().label("Senha")
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
      <Container>
        <section className="section section--light">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} className="form">
            {this.renderInput("email", "Email", "form__input-first")}
            {this.renderInput(
              "password",
              "Senha",
              "form__input-last",
              "password"
            )}
            {this.renderButton("Login")}
          </form>
        </section>
      </Container>
    );
  }
}

export default LoginForm;
