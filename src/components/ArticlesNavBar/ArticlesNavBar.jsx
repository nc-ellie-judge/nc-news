import { NavLink } from "react-router-dom";

export const ArticlesNavBar = ({ topics }) => {
  return (
    <nav>
      <NavLink to="/articles">All Articles</NavLink>
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
