import { useState } from 'react';
import {Col, Form, Button, Spinner} from 'react-bootstrap';
import Select from 'react-select'
import {allTags} from '../utils/tagsData'
import {createBlog} from '../../api/Blog'
import { toast } from 'react-toastify';

function CreateBlog({userId}) {



  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const [tags,setTags] = useState([])
  const [loading,setLoading] = useState(false)

  const funCreateBlog = (e)=>{
   e.preventDefault();
   const newTags = [];
   tags.map((tag)=>{
     newTags.push(tag.value)
   })
   setLoading(true)
   createBlog({
     title: title,
     body: body,
     tags: newTags
   }).then((res)=>{
    setTitle("")
    setBody("")
    setTags([])
    toast.success("the blog add with success", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000
    });

   }).catch((e)=>{
    toast.error("something wrong", {
      position: toast.POSITION.TOP_CENTER
    });
   })
   setLoading(false)
   
   console.log(title,body,newTags);
  }
  return (
  <Col md={8}>
    
    { loading && (
      <div className="text-center">
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>
    )
    }

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows={5} value={body} onChange={(e)=>setBody(e.target.value)}/>
      </Form.Group>
      <Form.Group className='w-50'>
      <Form.Label>Tags</Form.Label>
       <Select options={allTags} isMulti value={tags}  onChange={setTags}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={funCreateBlog} className='mt-4' disabled={loading}>create blog</Button>
    </Form>
  </Col>
  );
}

export default CreateBlog;