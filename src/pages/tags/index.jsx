import { Typography, Input } from "antd";
import Container from "../../components/utils/Container";
import "./tags.css";

const { Title, Paragraph } = Typography;
const { Search } = Input;
function Tags() {
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
          <Search className="input-search" />
        </nav>
        <section className="tags-list">
          {["javascript", "java", "css", "react", "vuejs", "angular"].map(
            (tag) => (
              <div className="tag">
                <Title level={3}>
                  <a href="" className="tag__name">
                    <span className="tag__prefix">#</span>
                    {tag}
                  </a>
                </Title>
                <Paragraph>111 post</Paragraph>
              </div>
            )
          )}
        </section>
      </Container>
    </section>
  );
}

export default Tags;
