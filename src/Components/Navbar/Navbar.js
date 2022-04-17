import "./css/Navbar.css";

/**
 * Component for showing Navbar and the options in a Navbar.
 * @component
 *
 */

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-group">
          <a className="navbar-brand" href="/">
            QUIZZA
          </a>
          <div className="divider-line"></div>

          <div>
            <ul className="nav-options">
              <a className="navbar-links" href="/quizzes">
                <li className="nav-individual-options">Quizzes</li>
              </a>
              <a className="navbar-links" href="/dashboard">
                <li className="nav-individual-options">Dashboard</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
