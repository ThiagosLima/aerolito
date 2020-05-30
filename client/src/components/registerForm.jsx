import React from "react";
import Joi from "joi-browser";
import { Container } from "react-grid-system";
import Form from "./common/form";
import { register } from "../services/userService";
import { loginWithJwt } from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    email: Joi.string().required().email().label("E-mail"),
    password: Joi.string().required().min(5).label("Senha"),
    name: Joi.string().required().label("Nome")
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
      <Container>
        <section className="section section--light">
          <h1>Cadastrar usuário</h1>
          <form onSubmit={this.handleSubmit} className="form">
            {this.renderInput("email", "E-mail", "form__input-first")}
            {this.renderInput("name", "Nome")}
            {this.renderInput(
              "password",
              "Senha",
              "form__input-last",
              "password"
            )}
            {this.renderButton("Cadastrar")}
          </form>
        </section>
      </Container>
    );
  }
}

export default RegisterForm;
