import { useState, useEffect, useContext } from "react";
import { fetchUsers } from "../utils/api";
import { UserContext } from "./contexts/UserContext";

export default function User() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(null);

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers().then((res) => {
      setUsers(res);
      setIsLoading(false);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      users.forEach((user) => {
        if (user.username === username && user.username.length > 0) {
          setLoggedInUser(user);
          setUsername("");
          setIsValid(true);
        }
      });
      if (!isValid) {
        setMessage("Your username is incorrect");
      }
    }
  };

  console.log(loggedInUser, "<<logged in");

  return (
    <>
      {loggedInUser ? (
        <>
          <div className="row">
            <div className="col-7 col-lg-5">
              <div className="card text-center mt-5 mx-3">
                <div className="card-body">
                  <img
                    src={loggedInUser.avatar_url}
                    className=" card-img-top img-fluid mx-auto my-4 rounded"
                    alt={loggedInUser.username}
                  />
                  <br />
                  <h4 className="card-title">@{loggedInUser.username}</h4>
                  <p className="card-subtitle">{loggedInUser.name}</p>
                </div>
              </div>
              <button
                id="pop-btn"
                type="button"
                onClick={() => setLoggedInUser("")}
                className="btn btn-primary my-2 mx-5"
              >
                Sign out
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h4 className="mt-5">Login</h4>
          <div className="create-btn-wrapper mx-3">
            <div className="col-md">
              <div className="card my-2">
                <form className="my-3 mx-3" onSubmit={handleSubmit}>
                  <label htmlFor="username" className="my-1">
                    @username
                  </label>
                  <br />
                  <input
                    id="username"
                    className="my-1"
                    type="text"
                    value={username}
                    placeholder="username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  ></input>
                  <div class="alert alert-light" role="alert">
                    {message}
                  </div>
                  <button
                    id="pop-btn"
                    type="submit"
                    className="btn btn-primary my-2"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
