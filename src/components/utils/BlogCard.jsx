import {useContext,useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import {RemoveBlog, allBlogsOfUser} from '../../api/Blog'
import {Card,Tooltip,OverlayTrigger, Modal,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare,faTrash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'


function BlogCard({blog,operation,userId,setBlogs}) {
  let navigate = useNavigate();

  const context = useContext(AppContext)
  const [user,setUser] = context.useUser
  // show and hide modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeBlog = ()=>{
    RemoveBlog(blog._id).then((res)=>{
       if(res.data){
        toast.success(`${res.data.title} deleted with success`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000
        });
        setShow(false)
        allBlogsOfUser(userId).then((res)=>{
          setBlogs(res.data)
        }).catch((e)=>{
          console.log(e)
        })
       }else{
          toast.error("something wrong", {
            position: toast.POSITION.TOP_CENTER
          });
       }


    }).catch((e)=>{
      toast.error("something wrong", {
        position: toast.POSITION.TOP_CENTER
      });
    })
  }
  return (
    <>
      <Card>
        {
          operation && user._id==userId &&  <Card.Header>
            <Link to={`/profile/${userId}/blogs/${blog._id}/edit`}><FontAwesomeIcon icon={faPenSquare} style={{fontSize:"1.5rem",cursor:"pointer",marginRight:"4px"}}/></Link>
            <FontAwesomeIcon icon={faTrash} onClick={handleShow} style={{fontSize:"1.3rem",cursor:"pointer",color:"red"}}/>
            </Card.Header>
        }
        
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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to delete blog with title : 
          <p><strong>{blog.title}</strong></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={removeBlog}>delete</Button>
        </Modal.Footer>
      </Modal>
    </>
   );
}

export default BlogCard;