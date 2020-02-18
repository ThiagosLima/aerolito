import http from "./httpService";

const apiEndpoint = "http://localhost:4000/api/chapters";
const awsEndpint = `https://aerolito-teste1.s3-sa-east-1.amazonaws.com`;

export async function getChapters(serieId, serieAwsId) {
  let { data: chapters } = await http.get(`${apiEndpoint}/serie/${serieId}`);
  console.log(chapters);

  // Update image url
  chapters.forEach(chapter => {
    chapter.cover = `${awsEndpint}/${serieAwsId}/${chapter.awsId}/${chapter.cover}`;
  });

  return chapters;
}

export async function getChapter(id) {
  let { data: chapter } = await http.get(`${apiEndpoint}/${id}`);

  // Update image url
  chapter.pages.forEach(page => {
    chapter.cover = `${awsEndpint}/${chapter.awsId}/${chapter.cover}`;
  });

  return chapter;
}
