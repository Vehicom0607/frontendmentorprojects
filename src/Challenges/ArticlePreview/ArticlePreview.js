import React, {Component} from 'react';
import {Card, Container} from "react-bootstrap";
import classes from './ArticlePreview.module.css'

class ArticlePreview extends Component {
    render() {
        return (
            <div className={classes.Background}>
                <Container>
                    <Card className={classes.Card}>
                        <Card.Img className={classes.CardImg} src="/ArticlePreview/drawers.jpg" />
                        <Card.Body className={classes.CardText}>
                            <Card.Title className={classes.CardTitle}>
                                Shift the overall look and feel by adding these wonderful torches to furniture in your home
                            </Card.Title>
                            <Card.Text className={classes.CardText}>
                                Ever been in a room and felt something was wrong? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete
                            </Card.Text>
                            <Card.Footer className={classes.CardFooter}>
                                <Card.Img className={classes.ProfileImage} src="/ArticlePreview/avatar-michelle.jpg" />
                                <Card.Text className={classes.UserName} >Michelle Appleton</Card.Text>
                                <Card.Img className={classes.Share} src="/ArticlePreview/icon-share.svg"/>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }
}


export default ArticlePreview;
