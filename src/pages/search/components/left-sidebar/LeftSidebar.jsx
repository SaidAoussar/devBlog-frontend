import { NavLink } from "react-router-dom";
import { Typography } from "antd";
import { useAtom } from "jotai";
import { pageNumberAtom } from "../../store/page-number";

const { Text } = Typography;
function LeftSidebar({ q, filters }) {
  const [_, setPageNumber] = useAtom(pageNumberAtom);
  const clearNumberPage = () => {
    setPageNumber(1);
  };
  return (
    <nav className="left-sidebar">
      <NavLink
        to={`?q=${q}&filters=posts`}
        className={`link ${filters === "posts" ? "link--active" : ""}`}
        onClick={clearNumberPage}
      >
        <Text>Post</Text>
      </NavLink>
      <NavLink
        to={`?q=${q}&filters=people`}
        className={`link ${filters === "people" ? "link--active" : ""}`}
        onClick={clearNumberPage}
      >
        <Text>People</Text>
      </NavLink>
      <NavLink
        to={`?q=${q}&filters=tags`}
        className={`link ${filters === "tags" ? "link--active" : ""}`}
        onClick={clearNumberPage}
      >
        <Text>Tags</Text>
      </NavLink>
    </nav>
  );
}

export default LeftSidebar;
