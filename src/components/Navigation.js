import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navigation = () => (
  <nav className="navigation row">
    <h1 className="Text-Style-3">Bookstore CMS</h1>
    <ul className="row">
      <li>
        <NavLink className="link Text-Style-6" to="/">Books</NavLink>
      </li>
      <li>
        <NavLink className="link Text-Style-6" to="/categories">Categories</NavLink>
      </li>
    </ul>
    <span id="userIcon">
      <ImUser />
    </span>
  </nav>
);
export default Navigation;
