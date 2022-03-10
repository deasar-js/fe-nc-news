import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <header className="row">
        <nav className="navbar navbar-light bg-light">
          <div className="col-md-4">
            <Link to="/">
              <span className="navbar-brand mb-0 mx-2 h1">Sup</span>
            </Link>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-2 mx-4">
            <Link to="/users">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="black"
                class="bi bi-list"
                viewBox="0 0 13 13"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
