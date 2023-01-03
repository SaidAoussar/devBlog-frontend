import Container from "../../components/utils/Container";
import { Button, Typography } from "antd";
import {
  HeartOutlined,
  MessageOutlined,
  BookOutlined,
} from "@ant-design/icons";
import "./tag.css";
const { Title, Text } = Typography;
function Tag() {
  return (
    <Container>
      <div className="tag-page">
        <header className="tag-header">
          <Title level={2}>Java</Title>
        </header>
        <section className="tag-content">
          <aside className="sidebar-left">
            <div className="btn-article-create">
              <Button type="primary">Create Post</Button>
            </div>
            <div className="sidebar-data">
              <Text>7078 Posts Published</Text>
            </div>
          </aside>
          <main className="article-list">
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
          </main>
        </section>
      </div>
    </Container>
  );
}

export default Tag;
