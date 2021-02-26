import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const HomeNavbar = () => {
    return (
        <Navbar expand="lg" bg={"dark"} variant={"dark"}>
            <Link to={"/"}><Navbar.Brand>FrontEndMentor.io Solutions</Navbar.Brand></Link>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link href="https://github.com/Vehicom0607">Github</Nav.Link>
                    <Nav.Link href="https://www.frontendmentor.io/">FrontEndMentor</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HomeNavbar;
