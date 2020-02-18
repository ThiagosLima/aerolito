import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import http from "../services/httpService";
import { getSerie } from "../services/serieService";

class ChapterForm extends Form {
  state = {
    serie: {},
    file: {},
    files: [],
    data: {
      title: "",
      number: ""
    },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Título"),
    number: Joi.number()
      .required()
      .label("Número")
  };

  async componentDidMount() {
    const serieId = this.props.match.params.id;
    const serie = await getSerie(serieId);
    this.setState({ serie });
  }

  awsCoverUpload = async () => {
    const { file, serie } = this.state;
    const uploadConfig = await http.get(
      `http://localhost:4000/api/upload/${serie.awsId}`
    );
    const { url, awsId, key: cover } = uploadConfig.data;

    await http.put(url, file, { headers: { "Content-type": file.type } });

    return { awsId, cover };
  };

  awsPagesUpload = async (awsId, cover) => {
    const { files, data, serie } = this.state;
    let pages = [];

    for (const file of [...files]) {
      const uploadConfig = await http.post("http://localhost:4000/api/upload", {
        awsSerieId: serie.awsId,
        awsId,
        name: file.name
      });

      const { url, name: page } = uploadConfig.data;

      await http.put(url, file, { headers: { "Content-type": file.type } });
      pages.push(page);
    }

    return {
      awsId,
      cover,
      ...data,
      pages,
      serieId: serie._id,
      awsSerieId: serie.awsId
    };
  };

  doSubmit = async () => {
    try {
      const { awsId, cover } = await this.awsCoverUpload();
      const updatedData = await this.awsPagesUpload(awsId, cover);

      await http.post("http://localhost:4000/api/chapters", updatedData);

      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <section className="section section--light">
        <h1>Cadastrar capítulo</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderFileInput("Capa", "image/*")}
          {this.renderFileInput("Páginas", "image/*", true)}
          {this.renderInput("title", "Título")}
          {this.renderInput("number", "Número do capítulo")}
          {this.renderButton("Cadastrar")}
        </form>
      </section>
    );
  }
}

export default ChapterForm;
