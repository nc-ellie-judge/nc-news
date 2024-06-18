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
  const [articleVotes, setArticleVotes] = useState(0);
  const [voteError, setVoteError] = useState(null);

  useEffect(() => {
    const fetchArticle = async (article_id) => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://be-nc-news-rht5.onrender.com/api/articles/${article_id}`
        );

        setArticle(response.data);
        setArticleVotes(response.data.article.votes);
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

  console.log(articleVotes);

  const handleClick = (article_id) => {
    setArticleVotes((prevVotes) => prevVotes + 1);
    const patchArticle = async (article_id) => {
      try {
        const response = await axios.patch(
          `https://be-nc-news-rht5.onrender.com/api/articles/${article_id}`,
          {
            inc_votes: 1,
          }
        );
      } catch (e) {
        setVoteError(e);
        setArticleVotes((prevVotes) => prevVotes - 1);
      }
    };
    patchArticle(article_id);
  };

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

      <section>
        <h3>Article Votes: {articleVotes}</h3>

        <p>Did you like this article? Give it an upvote!</p>
        {voteError && (
          <p>Oops, something went wrong with your vote. Try again later</p>
        )}
        {/* todo: add downvote? */}
        <button aria-label="upvote" onClick={() => handleClick(article_id)}>
          🫶
        </button>
      </section>

      <ArticleCommentsList article_id={article_id} />
    </article>
  );
};
