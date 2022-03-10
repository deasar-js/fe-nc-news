import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <header className="row">
        <nav className="navbar navbar-light fixed-top bg-light">
          <div className="col-sm-4 col-md-5"></div>
          <div className="g-col-md-3 text-center">
            <Link to="/">
              <span className="navbar-brand k mb-0 mx-5 h1">Sup</span>
            </Link>
          </div>

          <div className="dropdown col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <Link to="/users">
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
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
