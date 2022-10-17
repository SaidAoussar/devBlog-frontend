import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import { updateUser } from "./../../api/User";

function EditProfile() {
  const context = useContext(AppContext);
  const [user, setUser] = context.useUser;
  const [userState, setUserState] = useState({
    ...user,
    password: "",
  });

  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_id", userState._id);
    formData.append("username", userState.username);
    formData.append("email", userState.email);
    formData.append("password", userState.password);
    formData.append("avatar", avatar);

    // console.log("avatar", avatar);

    updateUser(user._id, formData)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            value={userState.username}
            onChange={(e) => {
              setUserState({
                ...userState,
                username: e.target.value,
              });
            }}
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={userState.email}
            onChange={(e) => {
              setUserState({
                ...userState,
                email: e.target.value,
              });
            }}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={(e) => {
              setUserState({
                ...userState,
                password: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>avatar</Form.Label>
          <Form.Control
            name="avatar"
            type="file"
            onChange={(e) => {
              setAvatar(e.target.files[0]);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
}
export default EditProfile;
