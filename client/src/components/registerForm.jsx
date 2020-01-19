import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { register } from "../services/userService";
import { loginWithJwt } from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("E-mail"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Senha"),
    name: Joi.string()
      .required()
      .label("Nome")
  };

  doSubmit = async () => {
    console.log("registered");
    try {
      const response = await register(this.state.data);
      loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = error.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <section className="section section--light">
        <h1>Cadastrar usuário</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "E-mail")}
          {this.renderInput("password", "Senha", "password")}
          {this.renderInput("name", "Nome")}
          {this.renderButton("Cadastrar")}
        </form>
      </section>
    );
  }
}

export default RegisterForm;
