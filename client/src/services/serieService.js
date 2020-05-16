import http from "./httpService";

const apiEndpoint = "http://localhost:4000/api/series";
const awsEndpint = `https://aerolito-teste1.s3-sa-east-1.amazonaws.com`;

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

async function postSerie(serie) {
  await http.post(apiEndpoint, serie);
}

export default { getSeries, getSerie, postSerie };
