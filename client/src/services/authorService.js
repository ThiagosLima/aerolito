import http from "./httpService";

const apiEndpoint = "http://localhost:4000/api/authors";
const awsEndpint = `https://aerolito-teste1.s3-sa-east-1.amazonaws.com`;

async function saveAuthor(author) {
  if (author._id) {
    const body = { ...author };
    delete body._id;
    return await http.put(`${apiEndpoint}/${author._id}`, body);
  }

  return await http.post(apiEndpoint, author);
}

async function getAuthors() {
  let { data: authors } = await http.get(apiEndpoint);

  // Update image url
  authors.forEach(author => {
    author.image = `${awsEndpint}/authors/${author.image}`;
  });

  return authors;
}

async function getAuthor(id) {
  let { data: author } = await http.get(`${apiEndpoint}/${id}`);

  // Update image url
  // author.image = `${awsEndpint}/authors/${author.image}`;

  return author;
}

async function deleteAuthor(authorId) {
  return await http.delete(`${apiEndpoint}/${authorId}`);
}

export default { saveAuthor, getAuthors, getAuthor, deleteAuthor };
