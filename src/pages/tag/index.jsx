import Container from "../../components/utils/Container";
import { Button, Typography } from "antd";

import { Link, useParams } from "react-router-dom";
import "./tag.css";
import ArticleList from "./components/ArticleList";
import { useEffect, useState } from "react";
import { getTag } from "../../api/Tag";
import { nbrPostsByTag } from "../../api/Blog";

const { Title, Text } = Typography;
function Tag() {
  const { tagId } = useParams();
  const [tag, setTag] = useState({});
  const [nbrPosts, setNbrPosts] = useState(0);

  useEffect(() => {
    getTag(tagId)
      .then((res) => {
        setTag(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    nbrPostsByTag(tagId)
      .then((res) => {
        setNbrPosts(res.data.nbrPosts);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [tagId]);
  return (
    <Container>
      <div className="tag-page">
        <header className="tag-header">
          <Title level={2}>{tag.name}</Title>
        </header>
        <section className="tag-content">
          <aside className="sidebar-left">
            <div className="btn-article-create">
              <Link to="/new">
                <Button type="primary">Create Post</Button>
              </Link>
            </div>
            <div className="sidebar-data">
              <Text>{nbrPosts} Posts Published</Text>
            </div>
          </aside>
          <main>
            <ArticleList tagId={+tagId} />
          </main>
        </section>
      </div>
    </Container>
  );
}

export default Tag;
