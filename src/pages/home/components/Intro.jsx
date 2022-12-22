import { Typography, Button, Image } from "antd";
import Container from "../../../components/utils/Container";

const { Title, Paragraph } = Typography;

const Intro = () => {
  return (
    <div className="intro_section" style={{ margin: "40px 0px" }}>
      <Container>
        <Title style={{ fontSize: "60px" }}>Stay curious.</Title>
        <Paragraph style={{ fontSize: "24px" }}>
          Discover stories, thinking, and expertise from writers on any topic.
        </Paragraph>
        <Button type="primary" size="large" shape="round">
          Start Reading
        </Button>
      </Container>
    </div>
  );
};

export default Intro;
