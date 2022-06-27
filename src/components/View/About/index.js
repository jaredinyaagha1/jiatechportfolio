import React from 'react';
import blackGuy from '../../../assets/images/blackGuy.jpg';
import CTA from '../../Links/CTA/index.js'
import AboutLinks from '../../Links/AboutLinks/index.js'
// import Resume from '../Resume/index.js';
import { Container, Row, Col, Card } from 'react-bootstrap';


function About() {
    return (
            <Card className="view d-flex align-items-center justify-content-center p-4" id="about">
                <Container>
                    <Row className='row d-flex align-items-center justify-content-center'>
                        <Col className="text-center">
                            <h2 className="dark-shade">ABOUT ME</h2>
                            <img className='profilePic' src={blackGuy} alt='profile' />
                        </Col>
                        <Col>
                            <Row className=" d-flex align-items-center justify-content-between">
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
                                <div className="">
                                    <CTA />
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Card>
    );
}

export default About;