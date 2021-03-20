import React, {Component} from 'react';
import classes from './blogr.module.css'
import {Navbar, NavDropdown, Nav, NavLink, Button, Container, Row, Col} from "react-bootstrap";

class Blogr extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={classes.BackgroundImage}>
                    <Container className={classes.Container}>
                    <Navbar collapseOnSelect expand="lg" variant="dark">
                        <Navbar.Brand className={classes.NavbarBrand}>Blogr</Navbar.Brand>
                        <Navbar.Toggle aria-controls="nav-dropdown" />
                        <Navbar.Collapse className={classes.NavbarCollapse} id="nav-dropdown">
                            <Nav className="mr-auto">
                                <NavDropdown className={classes.NavDropdown} id="product" title="Product">
                                    <NavDropdown.Item>Product 1</NavDropdown.Item>
                                    <NavDropdown.Item>Product 2</NavDropdown.Item>
                                    <NavDropdown.Item>Product 3</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className={classes.NavDropdown} id="company" title="Company">
                                    <NavDropdown.Item>Thing 1</NavDropdown.Item>
                                    <NavDropdown.Item>Thing 2</NavDropdown.Item>
                                    <NavDropdown.Item>Thing 3</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className={classes.NavDropdown} id="connect" title="Connect">
                                    <NavDropdown.Item>Item 1</NavDropdown.Item>
                                    <NavDropdown.Item>Item 2</NavDropdown.Item>
                                    <NavDropdown.Item>Item 3</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav >
                                <NavLink>Login</NavLink>
                                <Button className={classes.NavbarButton}>Sign Up</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className={classes.Center}>
                        <h1 className={"display-4 text-white text-center " + classes.BigText}>A modern publishing platform</h1>
                        <p className={"text-center text-white " + classes.SmallText}>Grow your audience and build your online brand</p>
                        <div className={"d-inline " + classes.ButtonGroup}>
                            <Button className={classes.Button1}>Start for Free</Button>
                            <Button className={classes.Button2}>Learn More</Button>
                        </div>
                    </div>
                    </Container>
                </div>
                <section className="text-center my-5">
                    <h2>Designed for the future</h2>
                    <Row>
                        <Col>
                            text
                        </Col>
                        <Col>
                            imag
                        </Col>
                    </Row>
                </section>
            </React.Fragment>
        );
    }
}


export default Blogr;
