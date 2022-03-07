import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <header className="row">
        <nav className="navbar navbar-light bg-light">
          <div className="col-md-4">
            <Link to="/">
              <span className="navbar-brand mb-0 mx-1 h1">Sup</span>
            </Link>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-2 mx-2"></div>
        </nav>
      </header>
    </>
  );
}
