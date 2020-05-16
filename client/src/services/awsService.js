import http from "./httpService";

const apiEndpoint = "http://localhost:4000/api/upload";

async function getCoverConfig(file, awsSerieId = "") {
  const fileType = file.type.split("/")[1];

  const { data } = await http.get(
    `${apiEndpoint}/cover/${fileType}?awsSerieId=${awsSerieId}`
  );

  return data;
}

async function getPageConfig({ awsSerieId, awsChapterId, file }) {
  const fileType = file.type.split("/")[1];

  const { data } = await http.get(
    `${apiEndpoint}/page/${awsSerieId}/${awsChapterId}/${file.name}/${fileType}`
  );

  return data;
}

async function putFile(url, file) {
  await http.put(url, file, { headers: { "Content-type": file.type } });
}

export default { getCoverConfig, putFile, getPageConfig };
