import { useState } from "react";
import { useAtom } from "jotai";
import { Typography, Input } from "antd";
import { pageNumberAtom } from "./store/page-number";
import Container from "../../components/utils/Container";
import TagsList from "./components/TagsList";
import * as S from "./styles";

const { Title, Paragraph } = Typography;
function Tags() {
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState("");
  const onSearch = (value) => {
    setPageNumber(1);
    setQuery(value);
  };
  return (
    <S.Tags>
      <Container>
        <S.Nav>
          <S.Title>Top Tags</S.Title>
          <S.Search className="input-search" onSearch={onSearch} />
        </S.Nav>
        <TagsList q={query} pageNumberState={[pageNumber, setPageNumber]} />
      </Container>
    </S.Tags>
  );
}

export default Tags;
