import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <h1>외상청</h1>

      <Link to="/aboutpage">
        <span>About.</span>
      </Link>
    </div>
  );
};
