import http from "./httpService";

const apiEndpoint = "http://localhost:4000/api/upload";

async function getImageConfig(file) {
  const fileType = file.type.split("/")[1];

  const { data } = await http.get(`${apiEndpoint}/authors/${fileType}`);

  return data;
}

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

async function putFile(url, file, setUploadPercentage) {
  await http.put(url, file, {
    headers: { "Content-type": file.type },
    onUploadProgress: progressEvent => {
      setUploadPercentage(
        parseInt(Math.round(progressEvent.loaded * 100) / progressEvent.total),
        file.name
      );
    }
  });
}

async function deleteFile(path, key) {
  const data = await http.delete(`${apiEndpoint}/${path}/${key}`);

  return data;
}

async function deleteChapter(awsSerieId, awsChapterId) {
  await http.delete(`${apiEndpoint}/folder/${awsSerieId}/${awsChapterId}`);
}

async function deleteSerie(awsSerieId) {
  await http.delete(`${apiEndpoint}/folder/${awsSerieId}/null`);
}

async function updateFile(awsSerieId, chapterId, file) {
  const fileType = file.type.split("/")[1];

  const { data } = await http.get(
    `${apiEndpoint}/serie/${awsSerieId}/${chapterId}/${fileType}`
  );

  return data;
}

export default {
  getCoverConfig,
  putFile,
  getPageConfig,
  getImageConfig,
  deleteFile,
  deleteChapter,
  deleteSerie,
  updateFile
};
