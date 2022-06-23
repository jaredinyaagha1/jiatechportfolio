import React, { useState } from 'react';
import Project from '../Project/index.js';
import { Container, Row, Card } from 'react-bootstrap';

function Portfolio() {

    const [projects] = useState([
        {
            name: 'surf-report',
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'pastel-puzzels',
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'run-buddy',
            description: 'HTML/CSS',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'led-wall',
            description: 'Node/IoT',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'calculator',
            description: 'React/JavaScript/CSS',
            link: "https://github.com",
            repo: "https://github.com"
        },
    ]);
    return (
        <div className="py-2">
            <Card className="view d-flex align-items-center justify-content-center">
                {/* <Card.Body> */}
                <Container>
                    <h1 id="portfolio" >Projects</h1>
                    <Row xs={1} md={3} className="g-4">

                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </Row>
                </Container>
                {/* </Card.Body> */}
            </Card>

        </div>
    );
};

export default Portfolio;