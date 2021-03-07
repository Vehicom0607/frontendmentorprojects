import React, {Component} from 'react';
import {Accordion, Card, Image} from "react-bootstrap";
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
            this.setState({open: clicked})
        }
    }


    render() {
        let q0, q1, q2, q3, q4;
        console.log(this.state.open)
        if (this.state.open === 0) {
            q0 = <p className={classes.FaqText}>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
            q1 = null
            q2 = null
            q3 = null
            q4 = null
        }
        if (this.state.open === 1) {
            q0 = null
            q1 = <p className={classes.FaqText}>No more than 2GB. All files in your account must fit your allotted storage space.</p>
            q2 = null
            q3 = null
            q4 = null
        }
        if (this.state.open === 2) {
            q0 = null
            q1 = null
            q2 = <p className={classes.FaqText}>Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed.</p>
            q3 = null
            q4 = null
        }
        if (this.state.open === 3) {
            q0 = null
            q1 = null
            q2 = null
            q3 = <p className={classes.FaqText}>Yes! Send us a message and we’ll process your request no questions asked.</p>
            q4 = null
        }
        if (this.state.open === 4) {
            q0 = null
            q1 = null
            q2 = null
            q3 = null
            q4 = <p className={classes.FaqText}>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
        }

        return (
            <div className={classes.Background}>
                <Image className={classes.MobileBg} alt="alt" src="/FaqAccordion/bg-pattern-mobile.svg" />
                <Image className={classes.MobileImage} alt="alt" src="/FaqAccordion/illustration-woman-online-mobile.svg" />

                <Card className={classes.FaqCard}>
                    <div className={classes.ImageCard} />
                    <Image className={classes.ImageBox} src="/FaqAccordion/illustration-box-desktop.svg" alt="Image Box"/>
                    <div className={classes.TextCard}>
                        <p className={classes.DarkText + " " + classes.FAQ}>FAQ</p>
                        <Accordion>
                            <Accordion.Toggle onClick={() => this.changeActiveHandler(0)} className={classes.AccordionHeader} >How many team members can I invite?</Accordion.Toggle>
                            {q0}
                            <Accordion.Toggle onClick={() => this.changeActiveHandler(1)} className={classes.AccordionHeader} eventKey="1">What is the maximum file upload size?</Accordion.Toggle>
                            {q1}
                            <Accordion.Toggle  onClick={() => this.changeActiveHandler(2)} className={classes.AccordionHeader} eventKey="2">How do I reset my password?</Accordion.Toggle>
                            {q2}
                            <Accordion.Toggle onClick={() => this.changeActiveHandler(3)} className={classes.AccordionHeader} eventKey="3">Can I cancel my subscription?</Accordion.Toggle>
                            {q3}
                            <Accordion.Toggle onClick={() => this.changeActiveHandler(4)} className={classes.AccordionHeader} eventKey="4">Do you provide additional support?</Accordion.Toggle>
                            {q4}
                        </Accordion>
                    </div>
                </Card>
            </div>
        );
    }
}

export default FaqAccordian;
