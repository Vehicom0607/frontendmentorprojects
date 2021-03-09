import React, {Component} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import classes from './IntroSignupForm.module.css'

class IntroSignupForm extends Component {
    render() {
        return (
            <div className={classes.Background + " d-flex"}>
                <Container>
                    <Row className={classes.Row}>
                        <Col className="align-self-center">
                            <h1 className={classes.Header}>Learn to code by watching others</h1>
                            <p className={classes.Description}>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
                        </Col>
                        <Col className="align-self-center">
                            <Card className={classes.DiscountCard + " my-4"}>
                                <Card.Text className={classes.Description + " text-center p-3"}>
                                    <span className={classes.SpecialOffer}>Try it free 7 days</span> then $20/mo. thereafter
                                </Card.Text>
                            </Card>
                            <Card className={classes.RegisterCard + " px-5 py-4"}>
                                <Form>
                                    <Form.Group controlId="RegisterInfo">
                                        <Form.Control type="text" placeholder="First Name" size="lg" className={"my-4 " + classes.FormInput}/>
                                        <Form.Control type="text" placeholder="Last Name"  size="lg" className={"my-4 " + classes.FormInput}/>
                                        <Form.Control type="email" placeholder="Email Address" size="lg" className={"my-4 " + classes.FormInput}/>
                                        <Form.Control type="password" placeholder="Password"   size="lg" className={"my-4 " + classes.FormInput}/>
                                        <Button block >CLAIM YOUR FREE TRIAL</Button>
                                    </Form.Group>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default IntroSignupForm;
