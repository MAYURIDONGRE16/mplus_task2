import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">
          Student Course Portal
        </span>

        <div>
          <Link
            to="/dashboard"
            className="btn btn-light me-2"
          >
            Dashboard
          </Link>

          <Link
            to="/courses"
            className="btn btn-light me-2"
          >
            Courses
          </Link>

          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;