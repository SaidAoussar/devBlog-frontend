import { NavLink } from "react-router-dom";
import { Typography } from "antd";

const { Text } = Typography;
function LeftSidebar({ q, filters }) {
  return (
    <nav className="left-sidebar">
      <NavLink
        to={`?q=${q}&filters=posts`}
        className={`link ${filters === "posts" ? "link--active" : ""}`}
      >
        <Text>Post</Text>
      </NavLink>
      <NavLink
        to={`?q=${q}&filters=people`}
        className={`link ${filters === "people" ? "link--active" : ""}`}
      >
        <Text>People</Text>
      </NavLink>
      <NavLink
        to={`?q=${q}&filters=tags`}
        className={`link ${filters === "tags" ? "link--active" : ""}`}
      >
        <Text>Tags</Text>
      </NavLink>
    </nav>
  );
}

export default LeftSidebar;
