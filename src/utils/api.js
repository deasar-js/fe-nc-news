import axios from "axios";

const api = axios.create({
  baseURL: "https://deasar-news-app.herokuapp.com/api",
});

export function fetchTopics() {
  return api.get("/topics").then(({ data }) => {
    return data.topics;
  });
}

export function fetchArticles() {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
}

export function fetchArticlesByTopic(topic) {
  return api.get(`/articles?topic=${topic}`).then(({ data }) => {
    console.log(data, "<<  topic");
    return data;
  });
}
