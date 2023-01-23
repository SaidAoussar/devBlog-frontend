import { useCallback, useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { pageNumberAtom } from "../store/page-number";

import useTags from "../hooks/useTags";
import Tag from "./tag/tag";

const TagsList = ({ q, pageNumberState }) => {
  const [pageNumber, setPageNumber] = pageNumberState;
  const { loading, tags, error, hasMore } = useTags(pageNumber, q);

  const observer = useRef();
  const lastTagElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <section className="tags-list">
      {tags.map((tag, index) => {
        if (tags.length === index + 1) {
          return <Tag key={tag.id} ref={lastTagElementRef} tag={tag} />;
        } else {
          return <Tag key={tag.id} tag={tag} />;
        }
      })}
    </section>
  );
};

export default TagsList;
