import React, {Component} from 'react';
import {Container, Jumbotron} from "react-bootstrap";
import classes from './FaqAccordian.module.css'


class FaqAccordian extends Component {
    render() {
        return (
            <div className={classes.Background}>
                <Container>
                    <h2 className="display-4">FAQ</h2>
                    <Jumbotron>

                    </Jumbotron>
                </Container>
            </div>
        );
    }
}

export default FaqAccordian;
