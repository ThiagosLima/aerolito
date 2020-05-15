import http from "./httpService";

const apiEndpoint = "http://localhost:4000/api/upload";

async function getCoverConfig(file) {
  const fileType = file.type.split("/")[1];

  const { data } = await http.get(`${apiEndpoint}/cover/${fileType}`);

  return data;
}

async function putCover(url, file) {
  await http.put(url, file, { headers: { "Content-type": file.type } });
}

export default { getCoverConfig, putCover };
