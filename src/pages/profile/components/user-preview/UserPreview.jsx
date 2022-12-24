import { Button, Typography } from "antd";
import "./user-preview.css";

const { Title, Text } = Typography;
const UserPreview = () => {
  return (
    <header className="profile-header">
      <div className="profile-header__top">
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--RN1fQUTf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/534025/a0031f0c-e12a-41d9-b87c-ba47b66b6c48.jpg"
          width="128"
          height="128"
          alt="said"
        />
        <Button type="primary" size="large">
          Edit profile
        </Button>
      </div>
      <div className="profile-header__details">
        <Title level={2} className="author-name">
          Said Aoussar
        </Title>
        <Text className="author-bio"> Front end developper</Text>
        <Text className="author-date">Joined on Dec 6, 2020</Text>
      </div>
    </header>
  );
};

export default UserPreview;
