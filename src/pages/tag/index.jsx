import Container from "../../components/utils/Container";
import { Button, Typography } from "antd";

import { Link, useParams } from "react-router-dom";
import PostsList from "./components/PostsList";
import { useEffect, useState } from "react";
import { getTag } from "../../api/Tag";
import { nbrPostsByTag } from "../../api/Blog";
import * as S from "./styles";

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
      <S.Tag>
        <S.Header>
          <S.Title level={2}>{tag.name}</S.Title>
        </S.Header>
        <S.Content>
          <S.Sidebar>
            <S.Widget>
              <Link to="/new">
                <Button type="primary">Create Post</Button>
              </Link>
            </S.Widget>
            <S.SidebarData>
              <S.Text>{nbrPosts} Posts Published</S.Text>
            </S.SidebarData>
          </S.Sidebar>
          <main>
            <PostsList tagId={+tagId} />
          </main>
        </S.Content>
      </S.Tag>
    </Container>
  );
}

export default Tag;
