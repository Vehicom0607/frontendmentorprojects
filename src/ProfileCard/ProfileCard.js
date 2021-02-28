import React from 'react';
import {Card, Container, Row, Col} from "react-bootstrap";
import classes from './ProfileCard.module.css'

const ProfileCard = () => {
    return (
        <Container className="py-5">
            <Card className={classes.ProfileCard + " mx-auto"} >
                <Card.Img className={classes.ProfileCardBackgroundImage} variant="top" src="/ProfileCard/bg-pattern-card.svg" />
                <Card.Img className={classes.ProfileCardImage} src={'/ProfileCard/image-victor.jpg'}/>
                <Card.Body className={"text-center " + classes.ProfileCardBody}>
                    <Card.Text className={classes.TextBold + " mb-0"}>
                        Victor Crest <span className={classes.TextMuted + " pl-1"}>26</span>
                    </Card.Text>
                    <Card.Text className={classes.TextMuted}>
                        London
                    </Card.Text>
                </Card.Body>
                <Card.Footer className={classes.CardFooter}>
                    <Row xs="3" className="text-center mb-1">
                        <Col>
                            <Card.Text className={classes.TextBold + " " + classes.FooterP}>80K</Card.Text>
                            <Card.Text className={classes.TextMuted}>Followers</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text className={classes.TextBold + " " + classes.FooterP}>80K</Card.Text>
                            <Card.Text className={classes.TextMuted}>Followers</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text className={classes.TextBold + " " + classes.FooterP}>80K</Card.Text>
                            <Card.Text className={classes.TextMuted}>Followers</Card.Text>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default ProfileCard;
