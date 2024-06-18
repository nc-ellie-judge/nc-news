import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

export const ArticlesPage = () => {
  const { topic } = useParams();
  const { state } = useLocation();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://be-nc-news-rht5.onrender.com/api/articles",
          {
            params: { topic },
          }
        );
        setArticles(response.data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [topic]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Articles {topic ? `on ${topic}` : ""}</h2>
      <h3>{state?.description} </h3>
      <ul>
        {articles?.map((article) => (
          <li key={article.article_id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};
