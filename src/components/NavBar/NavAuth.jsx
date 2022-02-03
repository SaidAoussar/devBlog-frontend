import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
function NavAuth({routesLink}) {

  // const RoutesLink = [
  //   {
  //     name: "profile",
  //     to: "/profile"
  //   },
  //   {
  //     name: "logout",
  //     to: "/logout"
  //   }
  // ]
  return <>
    {
      routesLink.map((routeLink,index)=>{
        return <Nav.Link key={index} as={Link} to={routeLink.to}>{routeLink.name}</Nav.Link>
      })
    }
  </>;
};

export default NavAuth;
