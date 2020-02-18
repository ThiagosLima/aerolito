import http from "./httpService";

const apiEndpoint = "http://localhost:4000/api/series";
const awsEndpint = `https://aerolito-teste1.s3-sa-east-1.amazonaws.com`;

export async function getSeries() {
  let { data: series } = await http.get(apiEndpoint);

  // Update image url
  series.forEach(serie => {
    serie.cover = `${awsEndpint}/${serie.awsId}/${serie.cover}`;
  });

  return series;
}

export async function getSerie(id) {
  let { data: serie } = await http.get(`${apiEndpoint}/${id}`);

  // Update image url
  serie.cover = `${awsEndpint}/${serie.awsId}/${serie.cover}`;

  return serie;
}
