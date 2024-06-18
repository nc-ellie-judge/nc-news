export const ArticleCard = (article) => {
  return <li key={article.article_id}>{article.title}</li>;
};
