import {Link} from 'react-router-dom'
import {Card,Tooltip,OverlayTrigger} from 'react-bootstrap';

function BlogCard({blog}) {
  return ( 
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
          <Link className='link'  key={blog._id} to={`/blog/${blog._id}`}>{blog.title.slice(0,75)}...</Link>
        </OverlayTrigger>
        </Card.Title>
        <Card.Text>{blog.body.slice(0,100)}...</Card.Text>
      </Card.Body>
    </Card>
   );
}

export default BlogCard;