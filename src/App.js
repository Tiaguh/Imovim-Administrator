import "./App.css"

import PostsPendent from "./Pages/PostsPendent/PostsPendent";
import Historic from "./Pages/Historic/Historic";
import Login from "./Pages/Login/Login"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<PostsPendent />} />
          <Route path="/historico" element={<Historic />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

    </>
  );
}