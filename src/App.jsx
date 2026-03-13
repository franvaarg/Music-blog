import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./Home";
import Article from "./Article";

import Trending from "./pages/Trending";
import Feed from "./pages/Feed";
import Editors from "./pages/Editors";
import Festivals from "./pages/Festivals";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/editors" element={<Editors />} />
        <Route path="/festivals" element={<Festivals />} />
      </Routes>
    </Router>
  );
}