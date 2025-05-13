import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">📝 To-Do List</Link></li>
        <li><Link to="/contact">📨 Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
