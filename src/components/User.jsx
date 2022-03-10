import { useState, useEffect, useContext } from "react";
import { fetchUsers } from "../utils/api";
import { UserContext } from "./contexts/UserContext";
import { Link } from "react-router-dom";

export default function User() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");

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
        } else {
          console.log("error");
          //   return (
          //     <div className="alert alert-warning my-5" role="alert">
          //       <p htmlFor="username">A simple warning alert—check it out!</p>
          //     </div>
          //   );
        }
      });
    }
  };

  console.log(loggedInUser, "<<logged in");
  return (
    <>
      {loggedInUser ? (
        <div className="card my-2">
          <div className="card-body">
            <h4 className="card-title">@{loggedInUser.username}</h4>
            <p className="card-subtitle">{loggedInUser.name}</p>
            <img src={loggedInUser.avatar_url} alt={loggedInUser.username} />
            <br />
            <button
              type="button"
              onClick={() => setLoggedInUser("")}
              className="btn btn-primary my-4"
            >
              log out
            </button>
          </div>
        </div>
      ) : (
        <>
          <h4 className="my-3">Login</h4>
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
                  <br />
                  <button type="submit" className="btn btn-primary my-2">
                    log in
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
