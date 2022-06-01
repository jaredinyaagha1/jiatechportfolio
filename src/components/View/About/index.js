import React from 'react';
import blackGuy from '../../../assets/images/blackGuy.jpg';
import Resume from '../Resume/index.js';
import { Container, Row, Col, Card } from 'react-bootstrap';


function About() {
    return (
        <div className="py-2">

            <Card>
                <Card.Body>
                    <Container>
                        <h1 id="about" >About</h1>
                        <Row className='row'>
                            <Col>
                                <img className='profilePic' src={blackGuy} alt='profile' />
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