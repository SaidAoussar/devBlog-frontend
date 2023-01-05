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

import Intro from "./components/Intro";
import CategoryList from "./components/categorie-list/CategoryList";
import BlogPreviewList from "./components/BlogPreviewList";

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
                  <a href="#" className="link">
                    <span>
                      <img src={homeIcon} alt="" />
                    </span>
                    Home
                  </a>
                </li>
                <li>
                  <a className="link" href="#">
                    <span>
                      <img src={readingListIcon} alt="" />
                    </span>
                    Reading List
                  </a>
                </li>
                <li>
                  <a className="link" href="#">
                    <span>
                      <img src={tagIcon} alt="" />
                    </span>
                    Tags
                  </a>
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
            <div className="substories">
              <div className="story">
                <article className="story__body">
                  <div className="story__top">
                    <img
                      className="story__author-pic"
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--VSWDxyxd--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/21839/3bffe2cb-6603-4757-a8d5-5652fe12e7a1.png"
                      alt="said"
                      width="34"
                      height="34"
                    />
                    <div>
                      <Title className="story__author-name" level={5}>
                        Said Aousssar
                      </Title>
                      <Text>Dec 19</Text>
                    </div>
                  </div>
                  <div style={{ marginLeft: "44px" }}>
                    <Title className="story__title" level={3}>
                      Concepts behind modern frameworks
                    </Title>
                    <div className="story__tags">
                      <Text>#Javascript</Text>
                      <Text>#Java</Text>
                    </div>
                    <div className="story__bottom">
                      <div className="story__details">
                        <Text>
                          <HeartOutlined style={{ marginRight: "8px" }} />
                          <span>540 reactions</span>
                        </Text>
                        <Text>
                          <MessageOutlined style={{ marginRight: "8px" }} />
                          <span> 42 comments</span>
                        </Text>
                      </div>
                      <div className="story__save">
                        <Text
                          style={{ fontSize: "12px", color: "rgb(82,82,82)" }}
                        >
                          9 min
                        </Text>
                        <Button className="bookmark" type="text" size="small">
                          <BookOutlined style={{ fontSize: "16px" }} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
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
