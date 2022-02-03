import { useState } from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import Select from 'react-select'
import {tags} from '../utils/tagsData'
function CreateBlog() {
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const [tags,setTags] = useState()
  return (
  <Col md={8}>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows={5} onChange={(e)=>setBody(e.target.value)}/>
      </Form.Group>
      <Form.Group className='w-50'>
      <Form.Label>Tags</Form.Label>
       <Select options={tags} isMulti defaultValue={[tags[0], tags[3]]} onChange={(e)=>setBody(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" className='mt-4'>create blog</Button>
    </Form>
  </Col>
  );
}

export default CreateBlog;