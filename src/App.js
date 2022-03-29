import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TextAR from "./components/TextAR/TextAR";
import Layout from "./pages";
import Home from "./pages";
import NewPost from "./pages/NewPost";
import Login from "./pages/login";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newpost" element={<NewPost />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;

// Robert : Aside Left
// Rubs : Aside Rigth
// Jess : Section center and navbar, create new post
