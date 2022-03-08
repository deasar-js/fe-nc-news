import { Link } from "react-router-dom";

export default function ErrorPage({ message }) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <Link to="/">return home</Link>
    </div>
  );
}
