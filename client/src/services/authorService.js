import http from "./httpService";

const apiEndpoint = "http://localhost:4000/api/authors";

export function saveAuthor(author) {
  if (author._id) {
    const body = { ...author };
    delete body._id;
    return http.put(`${apiEndpoint}/${author._id}`, body);
  }

  return http.post(apiEndpoint, { ...author });
}

export function getAuthors() {
  return http.get(apiEndpoint);
}

export function getAuthor(authorId) {
  return http.get(`${apiEndpoint}/${authorId}`);
}

export function getAuthorImage(authorId) {
  return http.get(`${apiEndpoint}/${authorId}/image`);
}

export function deleteAuthor(authorId) {
  return http.delete(`${apiEndpoint}/${authorId}`);
}
