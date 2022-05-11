import React from 'react';
import blackGuy1 from '../../../assets/images/BlackGuy1.jpg';
import Resume from '../Resume/index.js';
import { Container, Row, Col, Card } from 'react-bootstrap';


function About() {
    return (
        <div className="py-2">

            <Card>
                <Card.Body>
                    <Container>
                        <h1>About</h1>
                        <Row className='row'>
                            <Col>
                                <img className='profilePic' src={blackGuy1} alt='profile' />
                            </Col>
                            <Col>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                                <Resume />
                            </Col>

                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;