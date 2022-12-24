import { Row, Col, Card, Space, Image } from "antd";
import ModalEditProfile from "../ModalEditProfile";
import EditProfile from "../EditProfile";

const { Meta } = Card;
function UserPreview({ user }) {
  return (
    <Row>
      <Col span={24}>
        <Card
          title="Profile"
          extra={
            <ModalEditProfile>
              <EditProfile />
            </ModalEditProfile>
          }
        >
          <Space direction="vertical" align="center" style={{ width: "100%" }}>
            <Image
              width="170px"
              height="170px"
              src={import.meta.env.VITE_URL + "/" + user.img}
            ></Image>
            <Meta title={user.username} description={user.email} />
          </Space>
        </Card>
      </Col>
    </Row>
  );
}

export default UserPreview;
