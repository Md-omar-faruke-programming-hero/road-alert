import React from 'react';
import { Container, Form, FormControl, Nav, Navbar ,Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


import logo from "../../Image/0b70dffcb7cab161652219297e7d55e6.png"

const Header = () => {
  const {user,sigout}= useAuth()
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center m-3">
                <img src={logo} width="100px" alt="" />
             {
               user.email? <h1>welcome "{user.displayName}" at <br /> Road Alert Driving centre</h1>:<h1> Road Alert Driving centre</h1> 
             }
            </div>
            <div className="me-3">
            {
              user.email? <button onClick={sigout} className="btn btn-danger me-5">logout</button>: <NavLink className="text-decoration-none me-5" 
              activeStyle={{
               fontWeight: "bold",
               color: "red"
              }} 
              to="/login"><i class="fas fa-sign-in-alt"></i> login</NavLink>
            }
            <NavLink className="text-decoration-none" activeStyle={{
              fontWeight: "bold",
              color: "red"
             }}
              to="/signup"><i class="fas fa-user-plus"></i> Signup</NavLink>
            </div>

            
        </div>
        <Navbar className="bg-dark" expand="lg">
          <Container fluid>
    
    
     <Navbar.Collapse id="navbarScroll">
    <Nav
        className="m-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink activeStyle={{
              fontWeight: "bold"}} className= "text-light me-3 text-decoration-none" 
              to="/home">Home</NavLink>
        <NavLink activeStyle={{
              fontWeight: "bold"}}  className= "text-light me-3 text-decoration-none" 
              to="/coursefee">Courses</NavLink>
        <NavLink activeStyle={{
              fontWeight: "bold"}} className= "text-light me-3 text-decoration-none" 
              to="/about">About</NavLink>
        <NavLink activeStyle={{
              fontWeight: "bold"}} className= "text-light me-3 text-decoration-none" 
              to="/contact">Contact us</NavLink>
        <NavLink activeStyle={{
              fontWeight: "bold"}} className= "text-light me-3 text-decoration-none" 
              to="/advice">Advice</NavLink>
        <NavLink activeStyle={{
              fontWeight: "bold"}} className= "text-light me-3 text-decoration-none" 
              to="/apply">Enroll</NavLink>
       
        
    </Nav>
      <Form className="d-flex m-auto">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default Header;