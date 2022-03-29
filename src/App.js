import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages";
import NewPost from "./pages/NewPost";
import Login from "./pages/login";
import EditPost from "./pages/EditPost";
import "./App.scss";
import DetailPost from "./pages/DetailPost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newpost" element={<NewPost />} />
        <Route path="login" element={<Login />} />
        <Route path="posts/:idPost" element={<DetailPost />} />
        <Route path="posts/:idPost/edit" element={<EditPost />} />
      </Routes>
    </div>
  );
}
export default App;
