import http from "./httpService";

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

async function deleteSerie(id) {
  return await http.delete(`${apiEndpoint}/${id}`);
}

export default { getSeries, getSerie, saveSerie, deleteSerie };
