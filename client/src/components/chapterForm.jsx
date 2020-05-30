import React from "react";
import Joi from "joi-browser";
import { Container } from "react-grid-system";
import Form from "./common/form";
import chapterService from "../services/chapterService";
import awsService from "../services/awsService";
import serieService from "../services/serieService";

class ChapterForm extends Form {
  state = {
    file: "",
    files: "",
    data: {
      title: "",
      number: ""
    },
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    __v: Joi.number(),
    awsId: Joi.string().allow(""),
    serieId: Joi.string().allow(""),
    awsSerieId: Joi.string().allow(""),
    cover: Joi.string().allow(""),
    pages: Joi.array(),
    title: Joi.string().required().label("Título"),
    number: Joi.number().required().label("Número")
  };

  async componentDidMount() {
    await this.getSerieData();

    const chapterId = this.props.match.params.chapterId;

    if (chapterId) {
      const data = await chapterService.getChapter(chapterId);
      if (!data) return this.props.history.replace("/not-found");

      this.setState({ data });
    }
  }

  getSerieData = async () => {
    let { data } = this.state;
    const serieId = this.props.match.params.serieId;
    const serie = await serieService.getSerie(serieId);

    data.serieId = serieId;
    data.awsSerieId = serie.awsId;

    this.setState({ data });
  };

  awsCoverUpload = async () => {
    let { file, data } = this.state;

    if (data.awsId) {
      const { url, key: cover } = await awsService.updateFile(
        data.awsSerieId,
        data.awsId,
        file
      );

      data.cover = cover;
      this.setState({ data });

      // Update the image in aws
      await awsService.putFile(url, file, this.handleProgressBar);
    } else {
      const { url, awsId, key: cover } = await awsService.getCoverConfig(
        file,
        data.awsSerieId
      );

      console.log(url, awsId, cover);
      // Update state
      data.cover = cover;
      data.awsId = awsId;
      this.setState({ data });

      // Update the image in aws
      await awsService.putFile(url, file, this.handleProgressBar);
    }
  };

  awsPagesUpload = async () => {
    let { files, data } = this.state;
    let pages = [];

    for (const file of [...files]) {
      const pageData = {
        awsSerieId: data.awsSerieId,
        awsChapterId: data.awsId,
        file
      };

      const { url, name: page } = await awsService.getPageConfig(pageData);

      await awsService.putFile(url, file, this.handleProgressBar);

      pages.push(page);
    }

    data.pages = pages;
    this.setState({ data });
  };

  doSubmit = async () => {
    try {
      const { file, files, data } = this.state;

      if (file) await this.awsCoverUpload();
      if (files) await this.awsPagesUpload();

      await chapterService.saveChapter(data);

      window.location = `/series/${data.serieId}/chapters`;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <Container>
        <section className="section section--light">
          <h1>Cadastrar capítulo</h1>
          <form onSubmit={this.handleSubmit} className="form">
            {this.renderFileInput("Capa", "image/*")}
            {this.renderFileInput("Páginas", "image/*", true)}
            {this.renderInput("title", "Título")}
            {this.renderInput(
              "number",
              "Número do capítulo",
              "form__input-last"
            )}
            {this.renderProgressBar()}
            {this.renderButton("Cadastrar")}
          </form>
        </section>
      </Container>
    );
  }
}

export default ChapterForm;
