import React from 'react'
import Joi from 'joi-browser'
import { Container } from 'react-grid-system'
import Form from './common/form'
import chapterService from '../services/chapterService'
import awsService from '../services/awsService'
import serieService from '../services/serieService'

class ChapterForm extends Form {
  state = {
    serie: {},
    file: '',
    files: '',
    data: {
      title: '',
      number: ''
    },
    errors: {}
  }

  schema = {
    title: Joi.string().required().label('Título'),
    number: Joi.number().required().label('Número')
  }

  async componentDidMount() {
    const serieId = this.props.match.params.id
    const serie = await serieService.getSerie(serieId)
    this.setState({ serie })
  }

  awsCoverUpload = async () => {
    const { file, serie } = this.state

    const { url, awsId, key: cover } = await awsService.getCoverConfig(
      file,
      serie.awsId
    )

    await awsService.putFile(url, file, this.handleProgressBar)

    return { awsId, cover }
  }

  awsPagesUpload = async (awsId, cover) => {
    const { files, data, serie } = this.state
    let pages = []

    for (const file of [...files]) {
      const pageData = {
        awsSerieId: serie.awsId,
        awsChapterId: awsId,
        file
      }

      const { url, name: page } = await awsService.getPageConfig(pageData)

      await awsService.putFile(url, file, this.handleProgressBar)

      pages.push(page)
    }

    return {
      awsId,
      cover,
      ...data,
      pages,
      serieId: serie._id,
      awsSerieId: serie.awsId
    }
  }

  doSubmit = async () => {
    try {
      const { awsId, cover } = await this.awsCoverUpload()
      const chapter = await this.awsPagesUpload(awsId, cover)

      await chapterService.postChapter(chapter)

      window.location = '/'
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors }
        this.setState({ errors })
      }
    }
  }

  render() {
    return (
      <Container>
        <section className="section section--light">
          <h1>Cadastrar capítulo</h1>
          <form onSubmit={this.handleSubmit} className="form">
            {this.renderFileInput('Capa', 'image/*')}
            {this.renderFileInput('Páginas', 'image/*', true)}
            {this.renderInput('title', 'Título')}
            {this.renderInput('number', 'Número do capítulo')}
            {this.renderProgressBar()}
            {this.renderButton('Cadastrar')}
          </form>
        </section>
      </Container>
    )
  }
}

export default ChapterForm
