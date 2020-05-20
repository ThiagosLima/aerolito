import React from "react";
import Joi from "joi-browser";
import { Container } from "react-grid-system";
import Form from "./common/form";
import authorService from "../services/authorService";
import awsService from "../services/awsService";

class AuthorsForm extends Form {
  state = {
    file: "",
    data: {
      name: "",
      description: "",
      image: "",
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
    _id: Joi.string(),
    name: Joi.string().required().label("Nome"),
    description: Joi.string().required().label("Descrição"),
    image: Joi.string().allow("").label("Imagem"),
    facebook: Joi.string().allow("").label("Facebook"),
    email: Joi.string().allow("").email().label("E-mail"),
    instagram: Joi.string().allow("").label("Instagram"),
    twitter: Joi.string().allow("").label("Twitter"),
    youtube: Joi.string().allow("").label("Youtube"),
    tumblr: Joi.string().allow("").label("Tumblr"),
    behance: Joi.string().allow("").optional().label("Behance")
  };

  async componentDidMount() {
    const authorId = this.props.match.params.id;
    if (authorId) {
      const data = await authorService.getAuthor(authorId);
      if (!data) return this.props.history.replace("/not-found");

      this.setState({ data: this.mapToViewModel(data) });
    }
  }

  mapToViewModel(data) {
    let { _id, name, description, image } = data;

    let socialMedia = {
      facebook: "",
      email: "",
      instagram: "",
      twitter: "",
      youtube: "",
      tumblr: "",
      behance: ""
    };

    data.socialMedia.forEach(media => (socialMedia[media.name] = media.url));

    return { _id, name, description, image, ...socialMedia };
  }

  convertMedia = ({ _id, name, description, image, ...data }) => {
    let socialMedia = [];

    for (let [key, value] of Object.entries(data)) {
      if (value !== "") {
        socialMedia.push({ name: key, url: value });
      }
    }

    return { _id, name, description, image, socialMedia };
  };

  awsUpload = async () => {
    const { file, data } = { ...this.state };

    // Delete the image in aws if it exists
    if (data.image) await awsService.deleteFile("authors", data.image);

    // Get an valid url for the image in aws
    const { url, key: image } = await awsService.getImageConfig(file);
    data.image = image;
    this.setState({ data });

    // Update the image in aws
    await awsService.putFile(url, file, this.handleProgressBar);
  };

  doSubmit = async () => {
    try {
      await this.awsUpload();
      const parsedData = this.convertMedia(this.state.data);

      await authorService.saveAuthor(parsedData);
      window.location = "/credits";
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
            {this.renderFileInput("Perfil", "image/*")}
            {this.renderInput("facebook", "Facebook")}
            {this.renderInput("email", "E-mail")}
            {this.renderInput("instagram", "Instagram")}
            {this.renderInput("twitter", "Twitter")}
            {this.renderInput("youtube", "Youtube")}
            {this.renderInput("tumblr", "Tumblr")}
            {this.renderInput("behance", "Behance", "form__input-last")}
            {this.renderButton("Salvar")}
          </form>
        </section>
      </Container>
    );
  }
}

export default AuthorsForm;
