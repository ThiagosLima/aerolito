import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "../services/httpService";
import { Container } from "react-grid-system";

class SerieForm extends Form {
  state = {
    file: "",
    data: {
      title: "",
      authors: "",
      drawings: "",
      colors: "",
      genre: "",
      year: "",
      pages: "",
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
      .label("Desenhos"),
    colors: Joi.string()
      .required()
      .label("Cores"),
    genre: Joi.string()
      .required()
      .label("Gênero"),
    year: Joi.number()
      .required()
      .label("Ano"),
    pages: Joi.number()
      .required()
      .label("Páginas"),
    synopsis: Joi.string()
      .required()
      .label("Sinopse")
  };

  awsUpload = async () => {
    const uploadConfig = await http.get("http://localhost:4000/api/upload");
    const { url, awsId, key: cover } = uploadConfig.data;
    const { file, data } = this.state;

    await http.put(url, file, { headers: { "Content-type": file.type } });

    return { cover, awsId, ...data };
  };

  doSubmit = async () => {
    try {
      const updatedData = await this.awsUpload();

      await http.post("http://localhost:4000/api/series", updatedData);

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
          <h1>Cadastrar série</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderFileInput("Capa", "image/*")}
            {this.renderInput("title", "Título")}
            {this.renderInput("authors", "Autores")}
            {this.renderInput("drawings", "Desenhos")}
            {this.renderInput("colors", "Cores")}
            {this.renderInput("genre", "Gênero")}
            {this.renderInput("year", "Ano")}
            {this.renderInput("pages", "Páginas")}
            {this.renderTextArea("synopsis", "Sinopse", 10)}
            {this.renderButton("Cadastrar")}
          </form>
        </section>
      </Container>
    );
  }
}

export default SerieForm;
