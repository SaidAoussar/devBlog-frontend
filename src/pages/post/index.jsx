import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import {
  HeartOutlined,
  CommentOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Button, Layout, Typography } from "antd";
import { getBlog } from "../../api/Blog";
import "./post.css";
import parse from "html-react-parser";
import { format } from "date-fns";

const { Text, Title, Paragraph } = Typography;

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const [content, setContent] = useState("");

  useEffect(() => {
    setStatus("pending");
    getBlog(id)
      .then((res) => {
        if (res.status === 200) {
          setPost(res.data);
          setStatus("resolved");
        }

        if (res.response?.status === 400) {
          throw res.response.data.message;
        }
      })
      .catch((e) => {
        setError(e);
        setStatus("rejected");
      });
  }, [id]);

  return (
    <div>
      <Layout>
        <div className="layout-post">
          <aside className="sidebar-left">
            <div className="article_actions">
              <div className="article_actions--inner">
                <div className="reaction">
                  <HeartOutlined />
                  <span>10</span>
                </div>
                <div className="reaction">
                  <CommentOutlined />
                  <span>{post._count?.comments}</span>
                </div>
                <div className="reaction">
                  <BookOutlined />
                  <span>200</span>
                </div>
              </div>
            </div>
          </aside>
          <div className="content">
            <article className="article">
              {post.cover && (
                <img
                  className="article_cover"
                  src={`${import.meta.env.VITE_URL}/${post.cover}`}
                  alt=""
                />
              )}

              <div className="article_header_meta">
                <div className="author">
                  <img
                    src={`${import.meta.env.VITE_URL}/${post.author?.img}`}
                    alt=""
                    width="40"
                    height="40"
                  />
                  <div>
                    <Text>
                      {post.author?.firstName} {post.author?.lastName}
                    </Text>
                    <Text>
                      Posted on{" "}
                      {format(
                        new Date(post.createdAt || Date.now()),
                        "MMM d, y"
                      )}
                    </Text>
                  </div>
                </div>
                <Title level={2} className="article_title">
                  {post.title}
                </Title>
                <div className="article_tags">
                  {post.tags?.map((tag) => (
                    <Link to={`/t/${tag.id}`} key={tag.id} className="tag">
                      <span className="tag_prefix">#</span>
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="article_main">{parse(`${post.content}`)}</div>

              <section className="comments">
                <Title level={3}>Comments</Title>
                <div className="wrapper-new-comment">
                  <div className="avatar">
                    <img
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--KQjFXFpO--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/534025/a0031f0c-e12a-41d9-b87c-ba47b66b6c48.jpg"
                      alt=""
                      height="32"
                      width="32"
                    />
                  </div>
                  <div className="new-comment">
                    <ReactQuill
                      theme="snow"
                      value={content}
                      onChange={setContent}
                    />
                    <Button type="primary">Submit</Button>
                  </div>
                </div>
                <div className="comments_list">
                  <div className="comment">
                    <a href="#" className="comment__author-img">
                      <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--grr-XzUh--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/21839/3bffe2cb-6603-4757-a8d5-5652fe12e7a1.png"
                        alt=""
                      />
                    </a>
                    <div className="comment__content">
                      <div className="comment__header">
                        <Button type="text">Alex Lohr</Button>
                        <span className="separate-point">·</span>
                        <Text className="comment__date">
                          <time dateTime="2022-12-29T20:47:57Z">
                            Dec 29 '22
                          </time>
                        </Text>
                      </div>
                      <Paragraph className="comment__body">
                        This article is where I'm getting my "how good is Rust"
                        updates from LOL. Thank you. I appreciate the overview
                        of trends and reasoning behind rise/falls.
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
          <aside className="sidebar-right">
            <div className="sidebar-right--sticky">
              <div className="author_details">
                <div className="avatar">
                  <Link to={`/profile/${post.author?.id}`}>
                    <span>
                      <img
                        src={`${import.meta.env.VITE_URL}/${post.author?.img}`}
                        alt=""
                      />
                    </span>
                    <Text>
                      {post.author?.firstName} {post.author?.lastname}
                    </Text>
                  </Link>
                </div>
                <Paragraph className="bio">{post.author?.intro}</Paragraph>
                <div className="metadata_details">
                  <ul>
                    <li>
                      <Text className="key">Joined</Text>
                      <Text className="value">
                        <time
                          dateTime={post.author?.createdAt}
                          className="date"
                        >
                          {format(
                            new Date(post.author?.createdAt || Date.now()),
                            "MMM d, y"
                          )}
                        </time>
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Layout>
    </div>
  );
};

export default Post;
