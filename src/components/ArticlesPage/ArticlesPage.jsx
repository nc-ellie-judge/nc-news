import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { ArticlesNavBar } from "../ArticlesNavBar/ArticlesNavBar";

export const ArticlesPage = () => {
  const { topic } = useParams();
  const { state } = useLocation();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        setIsLoading(true);
        const topicsResponse = await axios.get(
          "https://be-nc-news-rht5.onrender.com/api/topics"
        );
        const articlesResponse = await axios.get(
          "https://be-nc-news-rht5.onrender.com/api/articles",
          {
            params: { topic },
          }
        );
        setTopics(topicsResponse.data.topics);
        setArticles(articlesResponse.data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticleData();
  }, [topic]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ArticlesNavBar topics={topics} />
      <h2>Articles {topic ? `on ${topic}` : ""}</h2>
      <h3>{state?.description} </h3>
      <ul>
        {articles?.map((article) => (
          <Link key={article.article_id} to={`/articles/${article.article_id}`}>
            {article.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};
