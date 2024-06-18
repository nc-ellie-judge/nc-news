import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { ArticlesPageLayout } from "./components/ArticlesPageLayout/ArticlesPageLayout";
import { SingleArticle } from "./components/SingleArticle/SingleArticle";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/community" element={<p>Community</p>} />
        <Route path="/articles" element={<ArticlesPageLayout />} />
        <Route path="/:article_id" element={<SingleArticle />} />
        <Route path="*" element={<p>not found</p>} />
      </Routes>{" "}
    </>
  );
}

export default App;
