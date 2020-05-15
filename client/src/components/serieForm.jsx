import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import serieService from "../services/serieService";
import awsService from "../services/awsService";
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
    title: Joi.string().required().label("Título"),
    authors: Joi.string().required().label("Autores"),
    drawings: Joi.string().required().label("Desenhos"),
    colors: Joi.string().required().label("Cores"),
    genre: Joi.string().required().label("Gênero"),
    year: Joi.number().required().label("Ano"),
    pages: Joi.number().required().label("Páginas"),
    synopsis: Joi.string().required().label("Sinopse")
  };

  awsUpload = async () => {
    const { file, data } = this.state;

    const { url, awsId, key: cover } = await awsService.getCoverConfig(file);
    await awsService.putCover(url, file);

    return { cover, awsId, ...data };
  };

  doSubmit = async () => {
    try {
      const serie = await this.awsUpload();

      await serieService.postSerie(serie);

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
          <form onSubmit={this.handleSubmit} className="form">
            {this.renderFileInput("Capa", "image/*")}
            {this.renderInput("title", "Título")}
            {this.renderInput("authors", "Autores")}
            {this.renderInput("drawings", "Desenhos")}
            {this.renderInput("colors", "Cores")}
            {this.renderInput("genre", "Gênero")}
            {this.renderInput("year", "Ano", "number")}
            {this.renderInput("pages", "Páginas", "number")}
            {this.renderTextArea("synopsis", "Sinopse", 10)}
            {this.renderButton("Cadastrar")}
          </form>
        </section>
      </Container>
    );
  }
}

export default SerieForm;
