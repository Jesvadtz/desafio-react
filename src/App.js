import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TextAR from "./components/TextAR/TextAR";
import Layout from "./pages";
import Home from "./pages";
import NewPost from "./pages/NewPost";
<<<<<<< HEAD

=======
import EditPost from "./pages/EditPost";
>>>>>>> b4c114f7a7b057f624e05c2237aa90e6dea9ac7c
import "./App.scss";
import DetailPost from "./pages/DetailPost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newpost" element={<NewPost />} />
        <Route path="posts/:idPost" element={<DetailPost />} />
        <Route path="posts/:idPost/edit" element={<EditPost />} />
      </Routes>
    </div>
  );
}
export default App;
