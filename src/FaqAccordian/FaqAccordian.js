import React, {Component} from 'react';
import {Container, Jumbotron} from "react-bootstrap";
import classes from './FaqAccordian.module.css'


class FaqAccordian extends Component {
    render() {
        return (
            <div className={classes.Background}>
                <Container>
                    <Jumbotron>
                        <h2 className="display-4">FAQ</h2>

                    </Jumbotron>
                </Container>
            </div>
        );
    }
}

export default FaqAccordian;
