import { useState, useEffect, useContext } from "react";
import { fetchUsers } from "../utils/api";
import { UserContext } from "./contexts/UserContext";
import { Container, Card, Image, Button, Form } from "react-bootstrap";

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
  };

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {loggedInUser ? (
        <>
          <Container>
            <Card className="justify-content-center mt-5 p-3 border-light shadow-sm">
              <Card.Body>
                <Image
                  src={loggedInUser.avatar_url}
                  alt={loggedInUser.username}
                  width="250"
                />
                <br />
                <Card.Title className="card-title">
                  @{loggedInUser.username}
                </Card.Title>
                <p className="card-subtitle">{loggedInUser.name}</p>
              </Card.Body>
            </Card>
            <Container className="text-center my-3">
              <Button
                id="pop-btn"
                type="button"
                onClick={() => setLoggedInUser("")}
                className="btn btn-primary "
              >
                Sign out
              </Button>
            </Container>
          </Container>
        </>
      ) : (
        <>
          <h4 className="mt-5">Sign in</h4>
          <Container className="create-btn-wrapper">
            <div className="col-md">
              <div className="card my-2">
                <Form className="my-3 mx-3" onSubmit={handleSubmit}>
                  <label htmlFor="username" className="my-1">
                    @username
                  </label>
                  <br />
                  <Form.Control
                    id="username"
                    className="my-1"
                    type="text"
                    value={username}
                    placeholder="username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  ></Form.Control>
                  <div class="alert alert-light" role="alert">
                    {message}
                  </div>
                  <Container className="text-center">
                    <button
                      id="pop-btn"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Sign in
                    </button>
                  </Container>
                </Form>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
}
