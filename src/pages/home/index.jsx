import { useEffect, useState, useRef, useCallback } from "react";
import { Button, Typography } from "antd";
import {
  HeartOutlined,
  MessageOutlined,
  BookOutlined,
} from "@ant-design/icons";

import Container from "../../components/utils/Container";
import homeIcon from "/public/img/home.svg";
import readingListIcon from "/public/img/reading-list.svg";
import tagIcon from "/public/img/tag.svg";
import "./home.css";
import ArticleList from "./components/ArticleList";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;
const Home = () => {
  return (
    <div>
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "240px minmax(0,1fr)",
            columnGap: "20px",
          }}
        >
          <aside>
            <nav className="main-nav">
              <ul>
                <li>
                  <Link to="/" className="link">
                    <span>
                      <img src={homeIcon} alt="" />
                    </span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="readinglist" className="link">
                    <span>
                      <img src={readingListIcon} alt="" />
                    </span>
                    Reading List
                  </Link>
                </li>
                <li>
                  <Link to="tags" className="link">
                    <span>
                      <img src={tagIcon} alt="" />
                    </span>
                    Tags
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="articles-list">
            <header>
              <nav className="secondary-nav">
                <ul>
                  <li>
                    <a href="" className="item-current">
                      Latest
                    </a>
                  </li>
                  <li>
                    <a href="">Top</a>
                  </li>
                </ul>
              </nav>
            </header>
            <ArticleList />
          </main>
        </div>
      </Container>
    </div>
  );
};

export default Home;
/*
https://github.com/Rizwan17/reactjs-blog/

https://github.com/weihomechen/blog/

https://profy.dev/article/react-folder-structure

https://www.freecodecamp.org/news/fullstack-react-blog-app-with-express-and-psql/


 -- infinite scroll with reactjs:
 https://www.youtube.com/watch?v=NZKUirTtxcg
 https://www.youtube.com/watch?v=2IbRtjez6ag
 https://www.youtube.com/watch?v=JWlOcDus_rs



 https://www.youtube.com/watch?v=6ardZEhjvV0
*/
