import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "../services/httpService";

class SerieForm extends Form {
  state = {
    data: {
      title: "",
      authors: "",
      drawings: "",
      colors: "",
      genre: "",
      year: 0,
      pages: 0,
      synopsis: ""
    },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Título"),
    authors: Joi.string()
      .required()
      .label("Autores"),
    drawings: Joi.string()
      .required()
      .label("Autores"),
    colors: Joi.string()
      .required()
      .label("Autores"),
    genre: Joi.string()
      .required()
      .label("Autores"),
    year: Joi.number()
      .required()
      .label("Autores"),
    pages: Joi.number()
      .required()
      .label("Autores"),
    synopsis: Joi.string()
      .required()
      .label("Autores")
  };

  doSubmit = async () => {
    try {
      await http.post("http://localhost:4000/api/series", this.state.data);

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
        <h1>Cadastrar série</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Título")}
          {this.renderInput("authors", "Autores")}
          {this.renderInput("drawings", "Desenhos")}
          {this.renderInput("colors", "Cores")}
          {this.renderInput("genre", "Gênero")}
          {this.renderInput("year", "Ano")}
          {this.renderInput("pages", "Páginas")}
          {this.renderInput("synopsis", "Sinopse")}
          {this.renderButton("Cadastrar")}
        </form>
      </section>
    );
  }
}

export default SerieForm;
