import http from "./httpService";
import chapterService from "./chapterService";
import awsService from "./awsService";

const apiEndpoint = "http://localhost:4000/api/series";
const awsEndpint = `https://aerolito-teste1.s3-sa-east-1.amazonaws.com`;

async function saveSerie(serie) {
  if (serie._id) {
    const body = { ...serie };
    delete body._id;
    delete body.__v;
    return await http.put(`${apiEndpoint}/${serie._id}`, body);
  }

  return await http.post(apiEndpoint, serie);
}

async function getSeries() {
  let { data: series } = await http.get(apiEndpoint);

  // Update image url
  series.forEach(serie => {
    serie.cover = `${awsEndpint}/${serie.awsId}/${serie.cover}`;
  });

  return series;
}

async function getSerie(id) {
  let { data: serie } = await http.get(`${apiEndpoint}/${id}`);

  // Update image url
  serie.cover = `${awsEndpint}/${serie.awsId}/${serie.cover}`;

  return serie;
}

async function getSeriePages(serieId) {
  const chapters = await chapterService.getChapters(serieId);
  const pages = chapters.reduce((prev, curr) => curr.pages.length + prev, 0);

  return pages;
}

async function deleteSerie(serieId) {
  const chapters = await chapterService.getChapters(serieId);

  // Delete all chapters of this serie (db and aws)
  const deletedChapters = chapters.map(
    async chapter => await chapterService.deleteChapter(chapter._id)
  );

  await Promise.all(deletedChapters);

  // delete in aws
  const serie = await getSerie(serieId);
  await awsService.deleteSerie(serie.awsId);

  // delete in db
  return await http.delete(`${apiEndpoint}/${serieId}`);
}

export default { getSeries, getSerie, getSeriePages, saveSerie, deleteSerie };
