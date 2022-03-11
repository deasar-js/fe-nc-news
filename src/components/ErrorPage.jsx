import { Link } from "react-router-dom";

export default function ErrorPage({ message }) {
  return (
    <div className="mt-5">
      <h2>Something went wrong</h2>
      <Link to="/">return home</Link>
    </div>
  );
}
