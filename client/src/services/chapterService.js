import http from "./httpService";

const apiEndpoint = "http://localhost:4000/api/chapters";
const awsEndpint = `https://aerolito-teste1.s3-sa-east-1.amazonaws.com`;

export async function getChapters(serieId) {
  let { data: chapters } = await http.get(`${apiEndpoint}/serie/${serieId}`);

  // Update image url
  chapters.forEach(chapter => {
    chapter.cover = `${awsEndpint}/${chapter.awsSerieId}/${chapter.awsId}/${chapter.cover}`;
  });

  return chapters;
}

export async function getPages(id) {
  let { data: chapter } = await http.get(`${apiEndpoint}/${id}`);

  // Update image url
  for (let i = 0; i < chapter.pages.length; i++) {
    chapter.pages[
      i
    ] = `${awsEndpint}/${chapter.awsSerieId}/${chapter.awsId}/${chapter.pages[i]}`;
  }

  return chapter.pages;
}
