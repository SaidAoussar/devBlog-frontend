import { Form, Input, Upload, Select, Button, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Container from "../../components/utils/Container";
import TextEditor from "./components/text-editor/TextEditor";
import "./create-post.css";

const { Text } = Typography;
const { TextArea } = Input;
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const CreatePost = () => {
  return (
    <div style={{ height: "100vh" }} className="create-post">
      <Container>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "48px",
          }}
        >
          <div className="left-links">
            <Text
              style={{
                fontSize: "24px",
                fontWeight: "700",
                marginRight: "16px",
              }}
            >
              DevBlog
            </Text>
            <Text style={{ fontSize: "16px", fontWeight: "500" }}>
              Create post
            </Text>
          </div>
          <Button type="text">
            <CloseOutlined />
          </Button>
        </nav>
        <main
          style={{
            backgroundColor: "white",
            height: "calc(100vh - 48px - 56px)",
            borderRadius: "8px",
            boxShadow: "0 0 0 1px #1717171a",
            overflowWrap: "anywhere",
            overflowY: "auto",
          }}
        >
          <Form>
            <div
              style={{
                padding: "0px 48px 32px",
              }}
            >
              <Form.Item className="cover">
                <Upload className="upload" listType="picture-card">
                  add a cover image
                </Upload>
              </Form.Item>
              <Form.Item name="title" className="title">
                <TextArea placeholder="New post title here..."></TextArea>
              </Form.Item>
              <Form.Item name="tags">
                <Select
                  mode="tags"
                  options={options}
                  placeholder="Add tags..."
                  bordered={false}
                />
              </Form.Item>
            </div>

            <TextEditor />
          </Form>
        </main>
        <footer
          style={{ height: "56px", display: "flex", alignItems: "center" }}
        >
          <Button type="primary" size="large">
            Publish
          </Button>
        </footer>
      </Container>
    </div>
  );
};

export default CreatePost;
