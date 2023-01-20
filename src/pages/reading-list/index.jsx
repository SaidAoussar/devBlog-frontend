import { Button, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { filterAtom } from "./atom/filter";
import Container from "../../components/utils/Container";
import { useUserStore } from "../../store/user";
import ArticleList from "./components/ArticleList";
import Sidebar from "./components/sidebar/Sidebar";
import "./reading-list.css";
import { useEffect, useState } from "react";
import { totalSavesAtom } from "./atom/total-saves";

const { Title, Text } = Typography;
const { Search } = Input;

const ReadingList = () => {
  const { id } = useUserStore((state) => state.user);
  const { query, setQuery } = useState("");
  const [filter, setFilter] = useAtom(filterAtom);
  const [totalSaves] = useAtom(totalSavesAtom);
  const handleSearch = (value) => {
    setFilter((prevFilter) => ({ ...prevFilter, q: value }));
    console.log(value);
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);
  return (
    <div className="readinglist">
      <Container>
        <nav className="readinglist__header">
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
        </nav>
        <div className="readinglist__body">
          <Sidebar userId={id} />
          <ArticleList userId={id} tagId={filter.tagId} query={filter.q} />
        </div>
      </Container>
    </div>
  );
};
export default ReadingList;
