import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function NavAuth({ routesLink }) {
  return (
    <>
      {routesLink.map((routeLink, index) => {
        return (
          <Nav.Link key={index} as={Link} to={routeLink.to}>
            {routeLink.name}
          </Nav.Link>
        );
      })}
    </>
  );
}

export default NavAuth;
