import React from "react";
import Joi from "joi-browser";
import { Container } from "react-grid-system";
import Form from "./common/form";
import storyService from "../services/storyService";

class StoryForm extends Form {
  state = {
    data: { title: "", url: "", body: "" },
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    __v: Joi.number(),
    serieId: Joi.string(),
    title: Joi.string().required().label("Título"),
    url: Joi.string().required().label("URL"),
    body: Joi.string().required().label("História")
  };

  async componentDidMount() {
    const { id, serieId } = this.props.match.params;

    let { data } = this.state;
    data.serieId = serieId;

    this.setState({ data });
    if (id) {
      data = await storyService.getStory(id);
      if (!data) return this.props.history.replace("/not-found");

      this.setState({ data });
    }
  }

  doSubmit = async () => {
    try {
      const { data } = this.state;

      await storyService.saveStory(data);

      window.location = `/series/${data.serieId}/accessibility`;
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
          <h1>Cadastrar História</h1>
          <form onSubmit={this.handleSubmit} className="form">
            {this.renderInput("title", "Título", "form__input-first")}
            {this.renderInput("url", "URL")}
            {this.renderTextArea("body", "História", 10, "form__input-last")}
            {this.renderButton("Cadastrar")}
          </form>
        </section>
      </Container>
    );
  }
}

export default StoryForm;
