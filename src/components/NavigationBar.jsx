import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export default function NavigationBar() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  console.log(loggedInUser, "< navbar");
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
            className="navber-item dropdown ms-auto show k bm-0 mx-5"
            aria-expanded="true"
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
            <div className="dropdown-content">
              <ul className="no-bullets">
                <li>
                  <Link className="no-styling" to="/user">
                    {loggedInUser ? "profile" : "sign in"}
                  </Link>
                </li>
                {loggedInUser ? (
                  <li>
                    <p onClick={() => setLoggedInUser("")}>sign out</p>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
