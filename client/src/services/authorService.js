import http from "./httpService";

const apiEndpoint = "http://localhost:4000/api/authors";

export function createAuthor(data) {
  return http.post(apiEndpoint, { ...data });
}

export function getAuthors() {
  return http.get(apiEndpoint);
}
