import React, {Component} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import classes from './IPC.module.css'

class IPC extends Component {

    state = {
        value: 16
    }

    onChangeSlider = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div className={classes.Background}>
                <Container>
                    <div className={classes.Head}>
                        <h1 className={classes.Header}>Simple, traffic-based pricing</h1>
                        <p className={classes.Description}>Sign-up for our 30-day trial. No credit card required.</p>
                    </div>
                    <Card className={classes.Card}>
                        <Card.Body>
                            <div className={classes.CardHead}>
                                <Card.Text className={classes.PageView}>{this.state.value}0k PAGEVIEWS</Card.Text>
                                <Card.Text className={classes.Pricing}><span className={classes.Price}>${this.state.value}.00</span>/month</Card.Text>
                            </div>
                            <Form>
                                <Form.Control className={classes.Slider} value={this.state.value} onChange={this.onChangeSlider} type="range" />
                            </Form>
                            <Card.Text className={classes.Switch}>Montly Billing <label className={classes.Toggle}><input type="checkbox" className={classes.ToggleInput} /><span className={classes.ToggleSlider} /></label> Yearly Billing</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text>Unlimited websites</Card.Text>
                            <Card.Text>100% data ownership</Card.Text>
                            <Card.Text>Email reports</Card.Text>
                            <Button>Start my trial</Button>
                        </Card.Footer>
                    </Card>
                </Container>
            </div>
        );
    }
}


export default IPC;
