import { useEffect, useState } from "react"
import { Row,Col } from "react-bootstrap"
import BlogCard from '../utils/BlogCard'
import {allBlogsOfUser} from '../../api/Blog'

function UserBlogs({userId}) {
  const [blogs, setBlogs] = useState([]) 

  useEffect(()=>{
    allBlogsOfUser(userId).then((res)=>{
      setBlogs(res.data)
    }).catch((e)=>{
      console.log(e)
    })
  },[])
  return ( 
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {
          blogs.map((blog)=>{
            return <Col key={blog._id}>
              <BlogCard blog={blog} operation={true} userId={userId} setBlogs={setBlogs} />
            </Col>
          })
        }
      </Row>
   );
}

export default UserBlogs;