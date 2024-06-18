import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FriendlyDate } from "../FriendlyDate/FriendlyDate";
import { ArticleCommentsList } from "../ArticleCommentsList/ArticleCommentsList";

export const SingleArticlePage = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async (article_id) => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://be-nc-news-rht5.onrender.com/api/articles/${article_id}`
        );

        setArticle(response.data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle(article_id);
  }, [article_id]);

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  if (!article) return <p>no article found</p>;

  const {
    title,
    article_img_url,
    author,
    body,
    comment_count,
    created_at,
    topic,
    votes,
  } = article?.article;

  return (
    <article>
      <header>
        <div>
          <p>Topic: {topic}</p>
        </div>
        <h2>{title}</h2>
        <div>
          <address>
            By{" "}
            <a rel="author" href="#">
              {/* todo: create an authors page */}
              {author}
            </a>
          </address>
          on <FriendlyDate created_at={created_at} />
        </div>
      </header>

      <div>{body}</div>

      <img src={article_img_url} alt="" width={200} />

      <div>
        <p>Votes: {votes}</p>
        <p>Comments: {comment_count}</p>
      </div>

      <ArticleCommentsList article_id={article_id} />
    </article>
  );
};
