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
    },
    {
        name: 'Intro component with sign-up form',
        description: 'Your challenge is to build out this landing page and get it looking as close to the design as possible.',
        link: 'https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1/hub/intro-component-with-signup-form-ca46nZDWb',
        solutionlink: '/intro-signup-form'
    },
    {
        name: 'Interactive Pricing Component',
        description: 'Your challenge is to build out this interactive pricing component and get it looking as close to the design as possible.',
        link: 'https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8/hub/interactive-pricing-component-gcMTo_4T9',
        solutionlink: '/ipc'
    },
    {
        name: 'Blogr Landing page',
        description: 'Your challenge is to build out this landing page and get it looking as close to the design as possible.',
        link: 'https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP/hub/blogr-landing-page-QxD7LTHB2',
        solutionlink: '/blogr'
    },
    {
        name: 'IP Address Tracker',
        description: 'Your challenge is to build out this IP Address Tracker app and get it looking as close to the design as possible. To get the IP Address locations, you\'ll be using the IP Geolocation API by IPify. To generate the map, we recommend using LeafletJS',
        link: 'https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0',
        solutionlink: '/ip'
    },
    {
        name: 'Countdown',
        description: 'Your challenge is to build out this countdown timer and get it looking as close to the design as possible.',
        link: 'https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-/hub/launch-countdown-timer-WV1ooOyj-',
        solutionlink: '/countdown'
    },
    {
        name: 'Untitled',
        description: 'Description',
        link: 'https://www.frontendmentor.io/',
        solutionlink: '/'
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
                    <p className="lead" >This was created to improve my CSS and React skills at the same time. These problems are from frontendmentor.io and they are a quite good resource in learning css. Hello if you have somehow found this.</p>
                    <Row xs="1" md="2" lg="3">
                        {renderProjectList}
                    </Row>
                </Container>
            </div>
        </React.Fragment>

    );
};

export default Home;
