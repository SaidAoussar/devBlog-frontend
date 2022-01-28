import React,{useEffect, useState} from 'react';
import {getBlogs} from '../../api/Blog';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'

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
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/100x50.png/"></Card.Img>
                <Card.Body>
                  <Card.Title>
                  <OverlayTrigger
                    key={blog._id}
                    placement={`top`}
                    overlay={
                      <Tooltip id={blog._id}>
                        {blog.title}
                      </Tooltip>
                    }
                  >
                    <Link className='link'  key={blog._id} to={`blog/${blog._id}`}>{blog.title.slice(0,75)}...</Link>
                  </OverlayTrigger>
                  </Card.Title>
                  <Card.Text>{blog.body.slice(0,100)}...</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          })
        }
      </Row>
      hello from homepage
    </Container>
  </div>;
}

export default HomePage;
