import { Typography } from "antd";
import { Outlet } from "react-router-dom";
import Container from "../../components/utils/Container";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";

const { Title } = Typography;
const Settings = () => {
  return (
    <Container>
      <Title level={2}>Settings For @saidaoussar1</Title>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          columnGap: "10px",
        }}
      >
        <LeftSidebar />
        <Outlet />
      </section>
    </Container>
  );
};

export default Settings;
