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
              <h2>Sup</h2>
            </Link>
          </div>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="search"
            />
            <button class="btn btn-outline-success my-2" type="submit">
              Search
            </button>
          </form>

          <div className="col-md-2"></div>
        </nav>
      </header>
    </>
  );
}
