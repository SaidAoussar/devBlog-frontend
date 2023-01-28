import { useCallback, useRef } from "react";
import { useAtom } from "jotai";
import PreviewPost from "components/preview-post/PreviewPost";
import useBlogs from "../../../hooks/useBlogs";
import { pageNumberAtom } from "../../../store/page-number";

function PostsFilter({ q }) {
  const [pageNumber, setPageNumber] = useAtom(pageNumberAtom);
  const { loading, error, posts, hasMore } = useBlogs(pageNumber, q);

  const observer = useRef();
  const lastPostElementRef = useCallback(
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
    [loading, hasMore, setPageNumber]
  );

  return (
    <section className="list-posts">
      {posts.map((post, index) => {
        if (posts.length === index + 1) {
          return (
            <PreviewPost key={post.id} ref={lastPostElementRef} post={post} />
          );
        } else {
          return <PreviewPost key={post.id} post={post} />;
        }
      })}
    </section>
  );
}

export default PostsFilter;
