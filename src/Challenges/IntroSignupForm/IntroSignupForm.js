import React, {Component} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import classes from './IntroSignupForm.module.css'

class IntroSignupForm extends Component {

    state = {
        first: {
            value: "",
            valid: false,
            changed: false
        },
        last: {
            value: "",
            valid: false,
            changed: false
        },
        email: {
            value: "",
            valid: false,
            changed: false
        },
        password: {
            value: "",
            valid: false,
            changed: false
        }
    }

    validationHandler = (event, field) => {
        console.log(event.target.value.length)
        if (field === 'first') {
            this.setState({first: {value: event.target.value, valid: event.target.value.length > 0? true: false, changed: true}})
        }
        if (field === 'last') {
            this.setState({last: {value: event.target.value, valid: event.target.value.length > 0? true: false, changed: true}})
        }
        if (field === 'email') {
            this.setState({email: {value: event.target.value, valid: event.target.value.length > 5? true: false, changed: true}})
        }
        if (field === 'password') {
            this.setState({password: {value: event.target.value, valid: event.target.value.length > 0? true: false, changed: true}})
        }
    }


    render() {
        let firstClass, lastClass, emailClass, passwordClass;
        let firstMessage, lastMessage, emailMessage, passwordMessage;
        console.log(this.state)
        console.log(this.state.first.value.length)
        if (this.state.first.valid || !this.state.first.changed) {
            firstClass = "my-4 " + classes.FormInput
        } else {
            firstClass = "my-4 " + classes.FormInput + " " + classes.Invalid
            firstMessage = <p className={classes.InvalidText}>Field cannot be empty</p>
        }
        if (this.state.last.valid || !this.state.last.changed) {
            lastClass = "my-4 " + classes.FormInput
        } else {
            lastClass = "my-4 " + classes.FormInput + " " + classes.Invalid
            lastMessage = <p className={classes.InvalidText}>Field cannot be empty</p>
        }
        if (this.state.email.valid || !this.state.email.changed) {
            emailClass = "my-4 " + classes.FormInput
        } else {
            emailClass = "my-4 " + classes.FormInput + " " + classes.Invalid
            emailMessage = <p className={classes.InvalidText}>Field cannot be empty</p>
        }
        if (this.state.password.valid || !this.state.password.changed) {
            passwordClass = "my-4 " + classes.FormInput
        } else {
            passwordClass = "my-4 " + classes.FormInput + " " + classes.Invalid
            passwordMessage = <p className={classes.InvalidText}> Password must be longer than 5 charcters.</p>
        }

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
                                    <Form.Group>
                                        {/* If I were to do this again, I would outsource these into a component */}
                                        <Form.Control value={this.state.first.value}  onChange={(event) => this.validationHandler(event, 'first')} id="1" type="text" placeholder="First Name" size="lg" className={firstClass}/>
                                        {firstMessage}
                                        <Form.Control value={this.state.last.value} onChange={(event) => this.validationHandler(event, 'last')} id="2" type="text" placeholder="Last Name"  size="lg" className={lastClass}/>
                                        {lastMessage}
                                        <Form.Control value={this.state.email.value} onChange={(event) => this.validationHandler(event, 'email')} id="3" type="email" placeholder="Email Address" size="lg" className={emailClass}/>
                                        {emailMessage}
                                        <Form.Control value={this.state.password.value} onChange={(event) => this.validationHandler(event, 'password')} id="4" type="password" placeholder="Password"   size="lg" className={passwordClass}/>
                                        {passwordMessage}
                                        <Button block  className={classes.SubmitButton}>CLAIM YOUR FREE TRIAL</Button>
                                        <Form.Text className={"text-center " + classes.Disclaimer}>By clicking this button you agree to our <a className={classes.TermsConditions} href="https://github.com/Vehicom0607/frontendmentorprojects">Terms and services</a></Form.Text>
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
