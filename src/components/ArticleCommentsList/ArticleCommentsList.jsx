import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const ArticleCommentsList = ({ article_id }) => {
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async (article_id) => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://be-nc-news-rht5.onrender.com/api/articles/${article_id}/comments`
        );

        setComments(response.data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments(article_id);
  }, [article_id]);

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  if (!comments) return <p>no comments found</p>;

  return (
    <article>
      <h3>Join the conversation</h3>
      <h3>{comments.comments.length} comments</h3>
      <ul>
        {comments?.comments.map(
          ({ comment_id, author, body, votes, created_at }) => {
            return (
              <div key={comment_id}>
                <p>{author}</p>
                <p>{body}</p>
                <p>votes: {votes}</p>
                <p>{created_at}</p>
              </div>
            );
          }
        )}
      </ul>
    </article>
  );
};
