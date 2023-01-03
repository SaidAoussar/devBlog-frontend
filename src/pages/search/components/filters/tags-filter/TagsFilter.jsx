import { Typography } from "antd";
import HashIcon from "../../../../../components/HashIcon";
import "./tags-filter.css";
const { Title } = Typography;
function TagsFilter() {
  return (
    <section className="tags-filter">
      <div className="tag">
        <div className="wrapper-hashicon">
          <HashIcon color="#f7df1e" />
        </div>
        <Title level={4}>javascript</Title>
      </div>
    </section>
  );
}

export default TagsFilter;
