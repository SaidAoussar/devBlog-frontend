import React, { useEffect, useState } from "react";
import { getBlogs } from "../../api/Blog";
import BlogCard from "../utils/BlogCard";
import { Row, Col, Container, Pagination } from "react-bootstrap";

function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [blogsInfo, setBlogsInfo] = useState({});

  useEffect(() => {
    getBlogs()
      .then((res) => {
        const { items, ...info } = res.data;
        setBlogs(items);
        setBlogsInfo(info);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(blogsInfo);

  /**
   * This means that you must never create new component types while rendering! Whenever you
   * create a new component type, it's a different reference, and that will cause React to
   * repeatedly destroy and recreate the child component tree.
   * visite to undersatand more
   * https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#component-types-and-reconciliation
   */
  const paginationItems = () => {
    let pgItems = [];

    //first button page
    if (blogsInfo.currentPage - 4 >= 1) {
      pgItems.push(
        <Pagination.Item onClick={() => handlePagination(1)}>
          {1}
        </Pagination.Item>
      );
    }

    if (blogsInfo.currentPage - 4 > 1) {
      pgItems.push(<Pagination.Ellipsis />);
    }

    //button left side
    for (let i = 3; i >= 1; i--) {
      if (blogsInfo.currentPage - i >= 1) {
        pgItems.push(
          <Pagination.Item
            onClick={() => handlePagination(blogsInfo.currentPage - i)}
          >
            {blogsInfo.currentPage - i}
          </Pagination.Item>
        );
      }
    }
    // curent page
    pgItems.push(
      <Pagination.Item
        active
        onClick={() => handlePagination(blogsInfo.currentPage)}
      >
        {blogsInfo.currentPage}
      </Pagination.Item>
    );
    // button right side
    for (let i = 1; i <= 3; i++) {
      if (blogsInfo.currentPage + i <= blogsInfo.totalPage) {
        pgItems.push(
          <Pagination.Item
            onClick={() => handlePagination(blogsInfo.currentPage + i)}
          >
            {blogsInfo.currentPage + i}
          </Pagination.Item>
        );
      }
    }

    //button Ellipsis
    if (blogsInfo.currentPage + 3 < blogsInfo.totalPage - 1) {
      pgItems.push(<Pagination.Ellipsis />);
    }

    // button of last page
    if (blogsInfo.currentPage + 3 <= blogsInfo.totalPage - 1) {
      pgItems.push(
        <Pagination.Item onClick={() => handlePagination(blogsInfo.totalPage)}>
          {blogsInfo.totalPage}
        </Pagination.Item>
      );
    }

    // for (let i = 1; i < blogsInfo.totalPage + 1; i++) {
    //   const active = blogsInfo.currentPage == i ? true : false;
    //   pgItems.push(
    //     <Pagination.Item
    //       active={active}
    //       onClick={() => {
    //         getBlogs(i)
    //           .then((res) => {
    //             const { items, ...info } = res.data;
    //             setBlogs(items);
    //             setBlogsInfo(info);
    //           })
    //           .catch((e) => {
    //             console.log(e);
    //           });
    //       }}
    //     >
    //       {i}
    //     </Pagination.Item>
    //   );
    // }

    return pgItems;
  };

  const handlePagination = (page) => {
    getBlogs(page)
      .then((res) => {
        const { items, ...info } = res.data;
        setBlogs(items);
        setBlogsInfo(info);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <Container>
        <Pagination>{paginationItems()}</Pagination>
        <Row xs={1} sm={2} md={3} lg={4} className="g-3">
          {blogs ? (
            <>
              {blogs.map((blog) => {
                return (
                  <Col key={blog._id}>
                    <BlogCard blog={blog} />
                  </Col>
                );
              })}
            </>
          ) : (
            <p>is loading</p>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
