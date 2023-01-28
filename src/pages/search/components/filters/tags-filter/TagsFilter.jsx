import React, { useRef, useCallback } from "react";
import useTags from "../../../hooks/useTags";
import HashIcon from "components/HashIcon";
import "./tags-filter.css";
import { useAtom } from "jotai";
import { pageNumberAtom } from "../../../store/page-number";
import * as S from "./styles";

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
    <S.Tag ref={ref}>
      <S.HashIconWrapper>
        <HashIcon />
      </S.HashIconWrapper>
      <S.Title level={4}>
        <S.Link to={`/t/${tag.id}`}>{tag.name} </S.Link>
      </S.Title>
    </S.Tag>
  );
});
export default TagsFilter;
