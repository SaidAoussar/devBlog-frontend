import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  HeartOutlined,
  CommentOutlined,
  BookOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Button, Layout, Typography } from "antd";
import { getBlog } from "../../api/Blog";
import {
  checkReacted,
  toggleReaction,
  nbrReactionsByPost,
} from "../../api/post-reactions";
import "./post.css";
import parse from "html-react-parser";
import { format } from "date-fns";
import NewComment from "./components/new-comment/NewComment";
import CommentsList from "./components/CommentsList";
import { useUserStore } from "../../store/user";

const { Text, Title, Paragraph } = Typography;

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const authUser = useUserStore((state) => state.user);
  const [reactionActive, setReactionActive] = useState(false);
  const [nbrReactions, setNbrReactions] = useState(0);

  useEffect(() => {
    setStatus("pending");
    getBlog(id)
      .then((res) => {
        if (res.status === 200) {
          setPost(res.data);
          setNbrReactions(res.data._count?.reactions);
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

    checkReacted({
      postId: id,
    })
      .then((res) => {
        if (res.status === 200) {
          setReactionActive(res.data?.reacted);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  useEffect(() => {
    nbrReactionsByPost(id)
      .then((res) => {
        if (res.status === 200) {
          setNbrReactions(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [reactionActive, id]);

  const handleToggleReaction = () => {
    toggleReaction({
      postId: id,
    })
      .then((res) => {
        if (res.status === 201) {
          setReactionActive((prevReactionActive) => !prevReactionActive);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Layout>
        <div className="layout-post">
          <aside className="sidebar-left">
            <div className="article_actions">
              <div className="article_actions--inner">
                <div className="reaction">
                  {!reactionActive ? (
                    <HeartOutlined onClick={handleToggleReaction} />
                  ) : (
                    <HeartFilled onClick={handleToggleReaction} />
                  )}
                  <span>{nbrReactions}</span>
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
                  <div className="author-details">
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
                  {authUser?.id === post.author?.id && (
                    <div className="author-action">
                      <Link to={`/${post.author?.username}/${post.slug}/edit`}>
                        Edit
                      </Link>
                    </div>
                  )}
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

              <div className="article_main">
                <div className="ql-snow">
                  <div className="ql-editor">{parse(`${post.content}`)}</div>
                </div>
              </div>

              <section className="comments">
                <Title level={3}>Comments</Title>
                <NewComment postId={post.id} />
                <CommentsList postId={id} />
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
