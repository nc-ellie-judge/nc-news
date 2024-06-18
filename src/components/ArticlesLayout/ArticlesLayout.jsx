import { ArticlesPage } from "../ArticlesPage/ArticlesPage";
import { Route, Routes } from "react-router-dom";
import { SingleArticlePage } from "../SingleArticlePage/SingleArticlePage";

export const ArticlesLayout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="topics/:topic" element={<ArticlesPage />} />
        <Route path=":article_id" element={<SingleArticlePage />} />
      </Routes>
    </>
  );
};
