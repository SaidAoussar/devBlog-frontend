import { useEffect, useState, useRef, useCallback } from "react";

import Container from "../../components/utils/Container";

import Intro from "./components/Intro";
import CategoryList from "./components/categorie-list/CategoryList";
import BlogPreviewList from "./components/BlogPreviewList";

const Home = () => {
  return (
    <div>
      <Intro />
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            columnGap: "20px",
          }}
        >
          <BlogPreviewList />
          <CategoryList />
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
