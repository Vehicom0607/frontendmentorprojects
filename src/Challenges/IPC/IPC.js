import React, {Component} from 'react';
import {Button, Card, Container} from "react-bootstrap";
import classes from './IPC.module.css'

class IPC extends Component {
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
                                <Card.Text className={classes.PageView}>100k PAGEVIEWS</Card.Text>
                                <Card.Text className={classes.Pricing}><span className={classes.Price}>$16.00</span>/month</Card.Text>
                            </div>
                            <div>slider</div>
                            <Card.Text>Montly Billing<span></span>Yearly Billing</Card.Text>
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
