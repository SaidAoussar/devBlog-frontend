import { Typography } from "antd";
import "./users-filter.css";

const { Title, Text } = Typography;
function UsersFilter() {
  return (
    <div className="users-filter">
      <div className="user">
        <a href="#">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--JCVkBfeK--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/2416/ba54e7d3-3e6d-494c-95a8-6721d250a6de.jpg"
            alt=""
            height={32}
            width={32}
          />
        </a>
        <div className="user__details">
          <Title level={4}>Said Aoussar</Title>
          <Text>saidaoussar1</Text>
        </div>
      </div>
    </div>
  );
}

export default UsersFilter;
