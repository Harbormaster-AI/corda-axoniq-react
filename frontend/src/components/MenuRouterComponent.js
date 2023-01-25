import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
const MenuRouter = props => {
  return (
     <Navbar bg="info" expand="md">
     <Container>
       <Navbar.Brand href="/">automobilepartsmarketplace</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <NavDropdown title="Lists" id="basic-nav-dropdown">
            <NavDropdown.Item href="/chassiss">Chassis List</NavDropdown.Item>
            <NavDropdown.Item href="/bodys">Body List</NavDropdown.Item>
            <NavDropdown.Item href="/engines">Engine List</NavDropdown.Item>
            <NavDropdown.Item href="/transmissions">Transmission List</NavDropdown.Item>
            <NavDropdown.Item href="/brakings">Braking List</NavDropdown.Item>
            <NavDropdown.Item href="/interiors">Interior List</NavDropdown.Item>
           </NavDropdown>
           <NavDropdown title="Corda Actions" id="basic-nav-dropdown">
                 <NavDropdown.Item href="/bulktokenactions">Bulk Token Actions</NavDropdown.Item>
                 <NavDropdown.Item href="/cordaadminactions">Admin</NavDropdown.Item>
           </NavDropdown>

         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
   );
};

export default MenuRouter;
