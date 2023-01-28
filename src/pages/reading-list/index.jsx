import { useAtom } from "jotai";
import { filterAtom } from "./atom/filter";
import Container from "components/utils/Container";
import { useUserStore } from "../../store/user";
import ArticleList from "./components/ArticleList";
import Sidebar from "./components/sidebar/Sidebar";
import { Search as SearchNavbar } from "../../layouts/navbar/styles";

import { totalSavesAtom } from "./atom/total-saves";
import styled from "styled-components";

const ReadingList = () => {
  const { id } = useUserStore((state) => state.user);
  const [filter, setFilter] = useAtom(filterAtom);
  const [totalSaves] = useAtom(totalSavesAtom);
  const handleSearch = (value) => {
    setFilter((prevFilter) => ({ ...prevFilter, q: value }));
  };

  return (
    <div className="readinglist">
      <Container>
        <Header className="readinglist__header">
          <h1>Reading List ({totalSaves})</h1>
          <div>
            <Search
              style={{
                width: "200px",
              }}
              placeholder="Search..."
              onSearch={handleSearch}
            />
          </div>
        </Header>
        <Content>
          <Sidebar userId={id} />
          <ArticleList userId={id} tagId={filter.tagId} query={filter.q} />
        </Content>
      </Container>
    </div>
  );
};

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Search = styled(SearchNavbar)`
  && {
    width: 300px;
    .ant-input-group-addon {
      background-color: ${(props) => props.theme.base.inverted};
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 12px;
`;

export default ReadingList;
