import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavigationBar() {
  const [query, setQuery] = useState("");

  return (
    <>
      <header className="row">
        <nav className="navbar navbar-light bg-light">
          <div className="col-md-4">
            <Link to="/">
              <span className="navbar-brand mb-0 mx-1 h1">Sup</span>
            </Link>
          </div>
          <div className="col-md-6">
            {/* <form className="form-inline">
              <input
                className="form-control"
                type="search"
                placeholder="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="search"
              />
              <button className="btn btn-outline-success my-2" type="submit">
                Search
              </button>
            </form> */}
          </div>
          <div className="col-md-2 mx-2"></div>
        </nav>
      </header>
    </>
  );
}
