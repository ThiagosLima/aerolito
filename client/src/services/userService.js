import http from "./httpService";

const apiEndpoint = "http://localhost:4000/api/users";

export function register({ email, password, name }) {
  return http.post(apiEndpoint, { email, password, name });
}
