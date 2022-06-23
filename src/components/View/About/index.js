import React from 'react';
import blackGuy from '../../../assets/images/blackGuy.jpg';
import CTA from '../../Links/CTA/index.js'
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
                            <Row className="justify-content-between mb-5">
                                <Card className="miniCard">
                                    goooal
                                </Card>
                                <Card className="miniCard">
                                    goooal
                                </Card>
                                <Card className="miniCard">
                                    goooal
                                </Card>
                            </Row>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            {/* <Resume /> */}
                            <CTA />
                        </Col>

                    </Row>
                </Container>
                {/* </Card.Body> */}
            </Card>
        </div>
    );
}

export default About;