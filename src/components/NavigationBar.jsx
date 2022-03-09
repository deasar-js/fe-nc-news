import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <header className="row">
        <nav className="navbar navbar-light fixed-top bg-light">
          <div className="col-md-4"></div>
          <div className="g-col-md-4">
            <Link to="/">
              <span className="navbar-brand k mb-0 mx-4 h1">Sup</span>
            </Link>
          </div>
          <div className="col-md-4"></div>
        </nav>
      </header>
    </>
  );
}
