import { useParams } from "react-router-dom";

export const SingleArticlePage = () => {
  const { article_id } = useParams();
  return <article>Single Article {article_id}</article>;
};
