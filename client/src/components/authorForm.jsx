import React from "react";
import Joi from "joi-browser";
import { Container } from "react-grid-system";
import Form from "./common/form";
import { createAuthor } from "../services/authorService";

class AuthorsForm extends Form {
  state = {
    data: {
      name: "",
      description: "",
      facebook: "",
      email: "",
      instagram: "",
      twitter: "",
      youtube: "",
      tumblr: "",
      behance: ""
    },
    errors: {}
  };

  schema = {
    name: Joi.string().required().label("Nome"),
    description: Joi.string().required().label("Descrição"),
    facebook: Joi.string().allow("").label("Facebook"),
    email: Joi.string().allow("").email().label("E-mail"),
    instagram: Joi.string().allow("").label("Instagram"),
    twitter: Joi.string().allow("").label("Twitter"),
    youtube: Joi.string().allow("").label("Youtube"),
    tumblr: Joi.string().allow("").label("Tumblr"),
    behance: Joi.string().allow("").optional().label("Behance")
  };

  convertMedia = ({ name, description, ...data }) => {
    let socialMedia = [];

    for (let [key, value] of Object.entries(data)) {
      if (value !== "") {
        socialMedia.push({ name: key, url: value });
      }
    }

    return { name, description, socialMedia };
  };

  doSubmit = async () => {
    try {
      const parsedData = this.convertMedia(this.state.data);
      console.log(parsedData);
      await createAuthor(parsedData);
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
      <Container>
        <section className="section section--light">
          <h1>Cadastrar autor</h1>
          <form onSubmit={this.handleSubmit} className="form">
            {this.renderInput("name", "Nome", "form__input-first")}
            {this.renderTextArea("description", "Descrição", 10)}
            {this.renderInput("facebook", "Facebook")}
            {this.renderInput("email", "E-mail")}
            {this.renderInput("instagram", "Instagram")}
            {this.renderInput("twitter", "Twitter")}
            {this.renderInput("youtube", "Youtube")}
            {this.renderInput("tumblr", "Tumblr")}
            {this.renderInput("behance", "Behance", "form__input-last")}
            {this.renderButton("Cadastrar")}
          </form>
        </section>
      </Container>
    );
  }
}

export default AuthorsForm;
