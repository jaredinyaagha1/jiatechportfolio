import React from 'react';
import blackGuy from '../../../assets/images/blackGuy.jpg';
import CTA from '../../Links/CTA/index.js'
import AboutLinks from '../../Links/AboutLinks/index.js'
// import Resume from '../Resume/index.js';
import { Container, Row, Col, Card } from 'react-bootstrap';


function About() {
    return (
        <div className="py-2">

            <Card className="view d-flex align-items-center justify-content-center">
                {/* <Card.Body> */}
                <Container>
                    <h1 id="about" >About</h1>
                    <Row className='row d-flex align-items-center justify-content-center'>
                        <Col>
                            <img className='profilePic' src={blackGuy} alt='profile' />
                        </Col>
                        <Col>
                            <Row>
                                {/* <Card className="miniCard">
                                    <h4 className="dark-accent">Years of Full Time Engineering Experience:</h4>
                                    <h1 className="dark-accent">2</h1>

                                </Card>
                                <Card className="miniCard">
                                    Vichyssoise bithces
                                </Card>
                                <Card className="miniCard">
                                    goooal crew gang
                                </Card> */}
                                <AboutLinks />
                            </Row>
                            <Row>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Row>
                            <Row>
                                <CTA />
                            </Row>

                            {/* <Resume /> */}
                        </Col>

                    </Row>
                </Container>
                {/* </Card.Body> */}
            </Card>
        </div>
    );
}

export default About;