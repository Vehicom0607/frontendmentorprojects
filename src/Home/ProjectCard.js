import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const ProjectCard = props => {
    return (
        <Col>
            <Card>
                <Card.Header>
                    {props.name}
                </Card.Header>
                <Card.Body className="text-left">
                    <Card.Text style={{height: '150px'}}>
                        {props.description}
                    </Card.Text>
                    <Card.Link href={props.link}>
                        Go to problem page
                    </Card.Link>
                </Card.Body>
                <Card.Footer>
                    <Button as={Link} to={props.solutionlink} block >
                        Go To Solution
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ProjectCard;
