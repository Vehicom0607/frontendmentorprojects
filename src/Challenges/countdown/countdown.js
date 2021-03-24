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

    handleTimer = () => {
        console.log(this.state)
        let update = true
        let currentTime = {...this.state}
        if (this.state.seconds === 0) {
            if (this.state.minutes === 0) {
                if (this.state.hours === 0) {
                    if (this.state.days === 0) {
                        this.setState({days: 0, hours: 0, minutes: 0, seconds: 0})
                        update = false
                    } else {
                        currentTime.days--;
                        currentTime.hours = 23;
                        currentTime.minutes = 59;
                        currentTime.seconds = 59;
                    }
                } else {
                    currentTime.hours--;
                    currentTime.minutes = 59;
                    currentTime.seconds = 59;
                }
            } else {
                currentTime.minutes--;
                currentTime.seconds = 59;
            }
        } else {
            currentTime.seconds--;
        }
        this.setState(currentTime)
        if (update) {
            setTimeout(() => this.handleTimer(), 1)
        }
    }

    componentDidMount() {
        this.handleTimer()
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
