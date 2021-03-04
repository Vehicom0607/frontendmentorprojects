import React, {Component} from 'react';
import {Accordion, Card, Container} from "react-bootstrap";
import classes from './FaqAccordian.module.css'


class FaqAccordian extends Component {

    render() {
        return (
            <div className={classes.Background}>
                <Container className={classes.Container}>
                    <Card className={classes.FaqCard}>
                        <div className={classes.ImageCard} />
                        <div className={classes.TextCard}>
                            <p>FAQ</p>
                            <Accordion>
                            </Accordion>
                        </div>

                    </Card>
                </Container>
            </div>
        );
    }
}

export default FaqAccordian;
