import React from 'react';
import { Row, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import HomeNavbar from "./HomeNavbar";
const projectList = [
    {
        name: 'FAQ Accordion Card',
        description: 'Your challenge is to build out this FAQ accordion card and get it looking as close to the design as possible.',
        link: 'https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam',
        solutionlink: '/faq-accordion'
    },
    {
        name: 'PROFILE CARD',
        description: 'Your challenge is to build out this profile card component and get it looking as close to the design as possible.',
        link: 'https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ/hub/profile-card-component-4AnInwj0Y',
        solutionlink: '/profile-card'
    },
    {
        name: 'Article Preview',
        description: 'Your challenge is to build out this article preview component and get it looking as close to the design as possible.',
        link: 'https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT/hub/article-preview-component-tk2i-ZzFv',
        solutionlink: '/article-preview'
    }
]

const renderProjectList = projectList.map(project => {
    return (
        <ProjectCard key={project.name} name={project.name} description={project.description} link={project.link} solutionlink={project.solutionlink} />
    )
})

const Home = () => {
    return (
        <React.Fragment>
            <HomeNavbar />
            <div className="text-center p-3 m-3">
                <Container>
                    <h1 className="display-4">FrontEndMentor.io Solutions in React</h1>
                    <p className="lead" >This was created to improve my CSS and React skills at the same time. These problems are from frontendmentor.io and they are a quite good resource in learning css.</p>
                    <Row xs="1" md="2" lg="3">
                        {renderProjectList}
                    </Row>
                </Container>
            </div>
        </React.Fragment>

    );
};

export default Home;
