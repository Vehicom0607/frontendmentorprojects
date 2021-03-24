import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import Timer from "./Timer";
import classes from './countdown.module.css'
class Countdown extends Component {
    state = {
        days: 9,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    render() {
        return (
            <div className={classes.Background}>
                <Container>
                    <h1 className={classes.Header}>WE'RE LAUNCHING SOON</h1>
                    <Row className={classes.Timers}>
                        <Timer value={this.state.days}  />
                        <Timer value={this.state.hours} />
                        <Timer value={this.state.minutes} />
                        <Timer value={this.state.seconds}/>
                    </Row>
                    <Row className={classes.Descriptions} >
                        <p className={classes.Description} >DAYS</p>
                        <p className={classes.Description} >HOURS</p>
                        <p className={classes.Description} >MINUTES</p>
                        <p className={classes.Description} >SECONDS</p>
                    </Row>
                </Container>
                <div  className={classes.Mountains}/>
            </div>
        );
    }
}


export default Countdown;
