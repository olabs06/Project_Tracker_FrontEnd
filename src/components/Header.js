import React from 'react';
import {Navbar,Nav, Container} from 'react-bootstrap';


let Header = () =>{
    return(
    <Container fluid >   
        <Navbar bg='light' variant='light'>
            <Navbar.Brand >
                <img  src='https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png' alt='Moringa' width={150} height={30} />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end" >
                <Nav style= {{color: 'blue'}} >
                    <Nav.Link eventKey="link-1">LogIn</Nav.Link>
                    <Nav.Link eventKey="link-2">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end" >
                <Nav style= {{color: 'blue'}} >
                    <Nav.Link eventKey="link-1">LogIn</Nav.Link>
                    <Nav.Link eventKey="link-2">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
    ) 
}

export default  Header;