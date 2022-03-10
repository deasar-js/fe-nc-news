import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Main from "./components/Main";
import TopicPage from "./components/TopicPage";
import ArticlePage from "./components/ArticlePage";
import ErrorPage from "./components/ErrorPage";
import DeleteComment from "./components/DeleteComment";
import User from "./components/User";
import { UserContext } from "./components/contexts/UserContext";

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });
  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <NavigationBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/users" element={<User />} />
            <Route path="/topics/:topic" element={<TopicPage />} />
            <Route path="/post/:article_id" element={<ArticlePage />} />
            <Route path="/comment/:comment_id" element={<DeleteComment />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </>
  );
}
