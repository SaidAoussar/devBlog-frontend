import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { isAuthenticated } from "../../api/Auth";

function About() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const getInfoUser = () => {
    isAuthenticated()
      .then((res) => {
        setError("");
        setUser(res.data);
      })
      .catch((e) => {
        setUser({});
        setError(e.response.data.message);
      });
  };
  return (
    <div>
      <div>hello from about us</div>
      <Button onClick={getInfoUser}>get auth</Button>
      {user && <div>{user.username}</div>}
      {error && <div>{error}</div>}
    </div>
  );
}

export default About;
