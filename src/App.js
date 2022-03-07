import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Main from "./components/Main";

export default function App() {
  // const [loggedInUser, setLoggedInUser] = useState({
  //   username: "tickle122",
  //   name: "Tom Tickle",
  //   avatar_url:
  //     "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  // });
  return (
    <>
      <NavigationBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}
