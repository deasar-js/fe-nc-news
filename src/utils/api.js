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
    return data.articles;
  });
}

export function fetchArticlesById(article_id) {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}

export function patchVotesById(article_id) {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data;
    });
}

export function fetchCommentsByArticleId(article_id) {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

export function postComment(article_id, comment) {
  return api
    .post(`/article/${article_id}/comments`, comment)
    .then(({ data }) => {
      console.log(data, "comment post api");
    });
}
