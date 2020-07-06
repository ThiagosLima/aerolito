import React from "react";
import Joi from "joi-browser";
import { Container } from "react-grid-system";
import Form from "./common/form";
import serieService from "../services/serieService";
import awsService from "../services/awsService";
import authorService from "../services/authorService";

class SerieForm extends Form {
  state = {
    file: "",
    authorOptions: [],
    data: {
      title: "",
      authors: [],
      drawings: [],
      colors: "",
      genre: "",
      year: "",
      call: "",
      synopsis: ""
    },
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    awsId: Joi.string(),
    __v: Joi.number(),
    cover: Joi.string(),
    title: Joi.string().required().label("Título"),
    authors: Joi.array().required().label("Autores"),
    drawings: Joi.array().required().label("Desenhos"),
    colors: Joi.string().required().label("Cores"),
    genre: Joi.string().required().label("Gênero"),
    year: Joi.number().required().label("Ano"),
    call: Joi.string().required().label("Chamada"),
    synopsis: Joi.string().required().label("Sinopse")
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      const data = await serieService.getSerie(id);
      if (!data) return this.props.history.replace("/not-found");

      this.setState({ data });
    }

    const authorOptions = await this.mapAuthorOptions();
    this.setState({ authorOptions });
  }

  mapAuthorOptions = async () => {
    const authorOptions = await authorService.getAuthors();
    return authorOptions.map(({ _id, name }) => ({ _id, label: name }));
  };

  awsUpload = async () => {
    const { file, data } = this.state;

    // Delete the image in aws if it exists
    // if (data.image) await awsService.deleteFile(`${data.awsId}`, data.cover);

    // If the file alread exists on aws upload
    if (data.awsId) {
      // Get an valid url for the image in aws
      const { url, key: cover } = await awsService.updateFile(
        data.awsId,
        null,
        file
      );

      // Update state
      data.cover = cover;
      this.setState({ data });

      // Update the image in aws
      await awsService.putFile(url, file, this.handleProgressBar);
    } else {
      // Get an valid url for the image in aws
      const { url, awsId, key: cover } = await awsService.getCoverConfig(file);

      // Update state
      data.cover = cover;
      data.awsId = awsId;
      this.setState({ data });

      // Update the image in aws
      await awsService.putFile(url, file, this.handleProgressBar);
    }
  };

  updateCoverName = () => {
    let { data } = this.state;
    let coverUrl = data.cover.split("/");
    data.cover = coverUrl[coverUrl.length - 1];
    this.setState({ data });
  };

  doSubmit = async () => {
    try {
      const { file, data } = this.state;

      if (file) await this.awsUpload();
      else this.updateCoverName();

      await serieService.saveSerie(data);

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
            {this.renderCheckbox(
              "authors",
              "Autores",
              this.state.authorOptions
            )}
            {this.renderCheckbox(
              "drawings",
              "Desenhos",
              this.state.authorOptions
            )}
            {/* {this.renderInput("drawings", "Desenhos")} */}
            {this.renderInput("colors", "Cores")}
            {this.renderInput("genre", "Gênero")}
            {this.renderInput("year", "Ano", "number")}
            {this.renderTextArea("call", "Chamada", 2)}
            {this.renderTextArea("synopsis", "Sinopse", 10, "form__input-last")}
            {this.renderProgressBar()}
            {this.renderButton("Cadastrar")}
          </form>
        </section>
      </Container>
    );
  }
}

export default SerieForm;
