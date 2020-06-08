import http from "./httpService";

const apiEndpoint = "http://localhost:4000/api/stories";

async function getStories() {
  let { data: stories } = await http.get(apiEndpoint);

  return stories;
}

async function getStory(id) {
  let { data: story } = await http.get(`${apiEndpoint}/${id}`);

  return story;
}

async function saveStory(story) {
  // Update a story
  if (story._id) {
    const body = { ...story };
    delete body._id;
    delete body.__v;
    return await http.put(`${apiEndpoint}/${story._id}`, body);
  }

  // Create a story
  return await http.post(apiEndpoint, story);
}

async function deleteStory(id) {
  return await http.delete(`${apiEndpoint}/${id}`);
}

export default { getStories, getStory, saveStory, deleteStory };
