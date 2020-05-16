import React from "react";
import Joi from "joi-browser";
import { Container } from "react-grid-system";
import Form from "./common/form";
import { saveAuthor, getAuthor } from "../services/authorService";

class AuthorsForm extends Form {
  state = {
    file: {},
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
    _id: Joi.string(),
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

  async componentDidMount() {
    const authorId = this.props.match.params.id;
    const { data } = await getAuthor(authorId);
    if (!data) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(data) });
  }

  mapToViewModel(data) {
    let { _id, name, description } = data;

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

    return { _id, name, description, ...socialMedia };
  }

  convertMedia = ({ _id, name, description, ...data }) => {
    let socialMedia = [];

    for (let [key, value] of Object.entries(data)) {
      if (value !== "") {
        socialMedia.push({ name: key, url: value });
      }
    }

    return { _id, name, description, socialMedia };
  };

  doSubmit = async () => {
    try {
      const parsedData = this.convertMedia(this.state.data);
      const image = this.state.file;

      const author = { ...parsedData, image };
      const formData = new FormData();

      formData.append("teste", 1);
      for (let key in author) {
        formData.append(key, author[key]);
      }

      console.log("formData", formData);

      await saveAuthor({ ...parsedData, image });
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
        <section className='section section--light'>
          <h1>Cadastrar autor</h1>
          <form onSubmit={this.handleSubmit} className='form'>
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
