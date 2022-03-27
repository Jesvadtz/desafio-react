import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages";
import NewPost from "./pages/NewPost";
import SignUp from "./pages/createAccount";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newpost" element={<NewPost />} />
        <Route path="create-account" element={<SignUp/>} />
      </Routes>
    </div>
  );
}
export default App;
