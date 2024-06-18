import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        {" "}
        <Link to="/community">Community</Link>
      </li>

      <li>
        {" "}
        <Link to="/articles">Articles</Link>
      </li>
    </nav>
  );
};
