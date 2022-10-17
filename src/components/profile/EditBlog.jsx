import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlog, updateBlog } from "../../api/Blog";
import Select from "react-select";
import { allTags } from "../utils/tagsData";
import { Col, Form, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function EditBlog({ userId }) {
  const { blogid } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    getBlog(blogid)
      .then((res) => {
        setTitle(res.data.title);
        setBody(res.data.body);

        const newTags = [];
        res.data.tags.map((tag) => {
          newTags.push({ value: tag, label: tag });
        });
        setTags(newTags);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const fnEditBlog = (e) => {
    e.preventDefault();

    const newTags = [];
    tags.map((tag) => {
      newTags.push(tag.value);
    });

    updateBlog({
      title,
      body,
      tags: newTags,
      _id: blogid,
      author: userId,
    })
      .then((res) => {
        setTitle(res.data.title);
        setBody(res.data.body);
        const newTags = [];
        res.data.tags.map((tag) => {
          newTags.push({ value: tag, label: tag });
        });
        setTags(newTags);
        toast.success(`${body} update with success`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
      })
      .catch((e) => {
        toast.error("something wrong", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <Col md={8}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={() => navigate(-1)}
        style={{
          fontSize: "1.5rem",
          cursor: "pointer",
          marginRight: "4px",
          marginBottom: "1.2rem",
        }}
      />

      {loading && (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>title</Form.Label>
          <Form.Control
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="w-50">
          <Form.Label>Tags</Form.Label>
          <Select options={allTags} isMulti value={tags} onChange={setTags} />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={fnEditBlog}
          className="mt-4"
          disabled={loading}
        >
          edit blog
        </Button>
      </Form>
    </Col>
  );
}

export default EditBlog;
