import { ArticlesPage } from "../ArticlesPage/ArticlesPage";
import { ArticlesNavBar } from "../ArticlesNavBar/ArticlesNavBar";
import { Route, Routes } from "react-router-dom";
import { SingleArticlePage } from "../SingleArticlePage/SingleArticlePage";

export const ArticlesLayout = () => {
  return (
    <>
      <ArticlesNavBar />
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="topics/:topic" element={<ArticlesPage />} />
        <Route path=":article_id" element={<SingleArticlePage />} />
      </Routes>
    </>
  );
};
