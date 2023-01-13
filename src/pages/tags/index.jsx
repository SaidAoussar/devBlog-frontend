import { useState } from "react";
import { useAtom } from "jotai";
import { Typography, Input } from "antd";
import { pageNumberAtom } from "./store/page-number";
import Container from "../../components/utils/Container";
import TagsList from "./components/TagsList";
import "./tags.css";

const { Title, Paragraph } = Typography;
const { Search } = Input;
function Tags() {
  const [pageNumber, setPageNumber] = useAtom(pageNumberAtom);
  const [query, setQuery] = useState("");
  const onSearch = (value) => {
    setPageNumber(1);
    setQuery(value);
  };
  return (
    <section
      style={{
        padding: "16px 0px",
      }}
      className="tags-page"
    >
      <Container>
        <nav>
          <Title>Top Tags</Title>
          <Search className="input-search" onSearch={onSearch} />
        </nav>
        <TagsList q={query} />
      </Container>
    </section>
  );
}

export default Tags;
