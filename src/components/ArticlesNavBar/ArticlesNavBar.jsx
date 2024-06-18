import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const ArticlesNavBar = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://be-nc-news-rht5.onrender.com/api/topics"
        );
        setTopics(response.data.topics);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <nav>
      <NavLink to="/articles">All Articles </NavLink>
      {topics?.map((topic) => (
        <NavLink
          key={topic.slug}
          to={`/articles/topics/${topic?.slug}`}
          state={{ description: topic?.description }}
        >
          {topic?.slug}
        </NavLink>
      ))}
    </nav>
  );
};
