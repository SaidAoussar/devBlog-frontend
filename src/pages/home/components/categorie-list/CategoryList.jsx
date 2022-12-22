import { Typography } from "antd";
import "./category-list.css";
const { Title, Text } = Typography;

const categories = ["Programmig", "javascript"];

function Category(props) {
  return <div {...props} />;
}

const CategoryList = (c) => {
  return (
    <section className="category-list">
      <Title level={4} className="title">
        DISCOVER MORE OF WHAT MATTERS TO YOU
      </Title>
      <div className="content">
        {categories.map((category) => (
          <Category className="category-tag">
            <Text>{category}</Text>
          </Category>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
