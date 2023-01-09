import { useSearchParams } from "react-router-dom";
import { Typography } from "antd";
import Container from "../../components/utils/Container";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";
import PostsFilter from "./components/filters/posts-filter/PostsFilter";
import UsersFilter from "./components/filters/users-filter/UsersFilter";
import TagsFilter from "./components/filters/tags-filter/TagsFilter";
const { Title } = Typography;
function Search() {
  const [searchParams] = useSearchParams();
  const filters = searchParams.get("filters");
  const q = searchParams.get("q");

  return (
    <Container>
      <Title level={2}>Settings For @saidaoussar1</Title>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          columnGap: "10px",
        }}
      >
        <LeftSidebar q={q} filters={filters} />
        {filters === "posts" && <PostsFilter q={q} />}
        {filters === "people" && <UsersFilter q={q} />}
        {filters === "tags" && <TagsFilter q={q} />}
      </section>
    </Container>
  );
}

export default Search;
