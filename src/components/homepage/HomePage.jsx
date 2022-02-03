import React,{useEffect, useState} from 'react'
import {getBlogs} from '../../api/Blog'
import BlogCard from '../utils/BlogCard'
import {Row,Col,Container} from 'react-bootstrap'


function HomePage() {
  const [blogs,setBlogs] = useState([])

  useEffect(()=>{
    getBlogs().then((res)=>{
      setBlogs(res.data)
    }).catch((e)=>{
      console.log(e)
    })
  }, [])
  return <div>
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {
          blogs.map((blog)=>{
            return <Col key={blog._id}>
              <BlogCard blog={blog} />
            </Col>
          })
        }
      </Row>
      hello from homepage
    </Container>
  </div>;
}

export default HomePage;
