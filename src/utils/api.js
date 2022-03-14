import axios from "axios";

const api = axios.create({
  baseURL: "https://deasar-news-app.herokuapp.com/api",
});

export function fetchUsers() {
  return api.get("/users").then(({ data }) => {
    return data.users;
  });
}

export function fetchTopics() {
  return api.get("/topics").then(({ data }) => {
    return data.topics;
  });
}

export function fetchArticles(sort_by, order, topic) {
  return api
    .get("/articles", {
      params: { sort_by: sort_by, order: order, topic: topic },
    })
    .then(({ data }) => {
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
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data.comment;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function removeCommentById(comment_id) {
  return api
    .delete(`/comments/${comment_id}`)
    .then((data) => {
      console.log(data.status, "<<< api res");
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}
