import "./App.css"

import Main from "./Pages/Main/Main";
import UsersComplaint from "./Pages/UsersComplaint/UsersComplaint";
import PostsComplaint from "./Pages/PostsComplaint/PostsComplaint";
import Historic from "./Pages/Historic/Historic";
import Login from "./Pages/Login/Login"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posts-denunciados" element={<PostsComplaint />} />
          <Route path="/usuarios-denunciados" element={<UsersComplaint />} />
          <Route path="/historico" element={<Historic />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

    </>
  );
}