import React, {Component} from 'react';
import {Accordion, Card} from "react-bootstrap";
import classes from './FaqAccordian.module.css'


class FaqAccordian extends Component {

    state = {
        open: null
    }

    changeActiveHandler = (clicked) => {
        const current = {...this.state}
        if (current.open === clicked) {
            this.setState({open: null})
        } else {
            this.setState({open: current})
        }
    }

    render() {
        return (
            <div className={classes.Background}>
                <Card className={classes.FaqCard}>
                    <div className={classes.ImageCard} />
                    <div className={classes.TextCard}>
                        <p className={classes.DarkText}>FAQ</p>
                        <Accordion>
                            <Accordion.Toggle variant="link" onClick={0} className={classes.AccordionHeader} eventKey="0">How many team members can I invite?</Accordion.Toggle>
                            <Accordion.Toggle variant="link" onClick={1} className={classes.AccordionHeader} eventKey="1">What is the maximum file upload size?</Accordion.Toggle>
                            <Accordion.Toggle variant="link" onClick={2} className={classes.AccordionHeader} eventKey="2">How do I reset my password?</Accordion.Toggle>
                            <Accordion.Toggle variant="link" onClick={3} className={classes.AccordionHeader} eventKey="3">Can I cancel my subscription?</Accordion.Toggle>
                            <Accordion.Toggle variant="link" onClick={4} className={classes.AccordionHeader} eventKey="4">Do you provide additional support?</Accordion.Toggle>
                        </Accordion>
                    </div>
                </Card>
            </div>
        );
    }
}

export default FaqAccordian;
