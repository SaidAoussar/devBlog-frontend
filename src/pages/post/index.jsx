import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import {
  HeartOutlined,
  CommentOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Button, Layout, Typography } from "antd";
import { getBlog } from "../../api/Blog";
import "./post.css";
import Container from "../../components/utils/Container";

const { Text, Title, Paragraph } = Typography;

const Post = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const [content, setContent] = useState("");

  useEffect(() => {
    setStatus("pending");
    getBlog(id)
      .then((res) => {
        if (res.status === 200) {
          setBlog(res.data);
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
                  <span>3</span>
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
              <img
                className="article_cover"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--NC9nfAD6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/khj27gtaqs5lq6c93l26.png"
                alt=""
              />
              <div className="article_header_meta">
                <div className="author">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--0pPaJBY2--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/243922/13c0045e-6656-4f74-aa57-3f9f39716be5.jpeg"
                    alt=""
                    width="40"
                    height="40"
                  />
                  <div>
                    <Text>Roberto B.</Text>
                    <Text>Posted on Dec 28</Text>
                  </div>
                </div>
                <Title level={2} className="article_title">
                  My first Svelte component
                </Title>
                <div className="article_tags">
                  <a href="#" className="tag">
                    <span className="tag_prefix">#</span>javascript
                  </a>
                  <a href="#" className="tag">
                    <span className="tag_prefix">#</span>svelte
                  </a>
                  <a href="#" className="tag">
                    <span className="tag_prefix">#</span>programming
                  </a>
                </div>
              </div>
              <div className="article_main">
                In this article, I'd like to explore how to create your first
                svelte component with a basic Svelte application. Svelte allows
                you to create a reactive web application so we will explore the
                Svelte reactivity. To do that, we will create a Svelte component
                that generates a random number (1 to 6), like rolling a dice,
                and then reactively update the list of all the previous rolls
                and the result. Install Vite and Svelte skeleton app For using
                Svelte with all the tools needed by the building process, I
                strongly suggest using the Vite tool via npm create vite@latest
                command. Within the execution of the command, you have to
                specify 3 things: the new directory of your new project, the
                framework (Svelte), and the variant (JavaScript or Typescript):
                npm create vite@latest Launching the command without any
                parameters, during the execution, you have to answer the
                questions. In the example, we are naming the new directory as
                roll-the-dice-svelte, the Framework as Svelte and the variants
                as `JavaScript': Creating Svelte application with Vite Or, if
                you are using npm, you can define the directory, the framework,
                and the variant (JavaScript or Typescript) directly in the
                command line (so the execution of the command is less
                interactive): In this article, I'd like to explore how to create
                your first svelte component with a basic Svelte application.
                Svelte allows you to create a reactive web application so we
                will explore the Svelte reactivity. To do that, we will create a
                Svelte component that generates a random number (1 to 6), like
                rolling a dice, and then reactively update the list of all the
                previous rolls and the result. Install Vite and Svelte skeleton
                app For using Svelte with all the tools needed by the building
                process, I strongly suggest using the Vite tool via npm create
                vite@latest command. Within the execution of the command, you
                have to specify 3 things: the new directory of your new project,
                the framework (Svelte), and the variant (JavaScript or
                Typescript): npm create vite@latest Launching the command
                without any parameters, during the execution, you have to answer
                the questions. In the example, we are naming the new directory
                as roll-the-dice-svelte, the Framework as Svelte and the
                variants as `JavaScript': Creating Svelte application with Vite
                Or, if you are using npm, you can define the directory, the
                framework, and the variant (JavaScript or Typescript) directly
                in the command line (so the execution of the command is less
                interactive):
              </div>

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
                  <a href="#">
                    <span>
                      <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--ErEUkFCA--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/243922/13c0045e-6656-4f74-aa57-3f9f39716be5.jpeg"
                        alt=""
                      />
                    </span>
                    <Text>Roberto B.</Text>
                  </a>
                </div>
                <Paragraph className="bio">
                  ⚛️ Software Developer @CGI_Global | 🌅 Technical Writer
                  @ThePracticalDev @hashnode @Medium @LogRocket | 🎨 Content
                  Creator | 📝 5k+ Blog Subscribers
                </Paragraph>
                <div className="metadata_details">
                  <ul>
                    <li>
                      <Text className="key">Joined</Text>
                      <Text className="value">
                        <time dateTime="2019-10-06T17:53:52Z" className="date">
                          Oct 6, 2019
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
