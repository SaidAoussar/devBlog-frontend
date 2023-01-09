import React, { useRef, useCallback } from "react";
import { Typography } from "antd";
import useTags from "../../../hooks/useTags";
import HashIcon from "../../../../../components/HashIcon";
import "./tags-filter.css";
import { useAtom } from "jotai";
import { pageNumberAtom } from "../../../store/page-number";
const { Title } = Typography;
function TagsFilter({ q }) {
  const [pageNumber, setPageNumber] = useAtom(pageNumberAtom);
  const { loading, error, tags, hasMore } = useTags(pageNumber, q);

  const observer = useRef();
  const lastTagElementRef = useCallback(
    (node) => {
      console.log("hello from last element");
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        console.log("increase page");
        if (entries[0].isIntersecting && hasMore) {
          console.log("increase page");
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, setPageNumber]
  );
  return (
    <section className="tags-filter">
      {tags.map((tag, index) => {
        if (tags.length === index + 1) {
          return <Tag key={tag.id} ref={lastTagElementRef} tag={tag} />;
        } else {
          return <Tag key={tag.id} tag={tag} />;
        }
      })}
    </section>
  );
}

const Tag = React.forwardRef(({ tag }, ref) => {
  return (
    <div ref={ref} className="tag">
      <div className="wrapper-hashicon">
        <HashIcon color="#f7df1e" />
      </div>
      <Title level={4}>{tag.name}</Title>
    </div>
  );
});
export default TagsFilter;
