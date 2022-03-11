import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export default function NavigationBar() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <>
      <header className="container">
        <nav className="navbar navbar-light fixed-top bg-light">
          <div className="nav-item">
            <Link to="/">
              <span className="navbar-brand k mb-0 mx-5 h1">sup?</span>
            </Link>
          </div>

          <div
            className="navbar-item dropdown ms-auto show k bm-0 mx-5"
            aria-expanded="true"
          >
            <button
              className="btn btn-primary "
              type="button"
              id="nav-dropdown"
              data-bs-toggle="dropdown"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="black"
                className="bi bi-list"
                viewBox="0 0 13 13"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            <ul
              className="dropdown-menu drop no-bullets p-2 shadow-sm mb-5 bg-body rounded"
              aria-labelledby="nav-dropdown"
            >
              <li>
                <Link
                  id="sign"
                  className="dropdown-menu-item no-styling"
                  to="/user"
                >
                  {loggedInUser ? "Profile" : "Sign in"}
                </Link>
              </li>
              {loggedInUser ? (
                <li>
                  <Link
                    id="sign"
                    className="dropdown-menu-item no-styling"
                    to=""
                    onClick={() => setLoggedInUser("")}
                  >
                    Sign out
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
