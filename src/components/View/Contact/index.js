import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

function Contact() {
    return (
        <div className="py-2">
            <Card>
                <Card.Body>
                    <Container>
                        <h1>Contact</h1>
                        <Row>
                            <Col>
                                <img src="https://i.imgur.com/px6cNb.png" alt="contact" />
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="name" placeholder="Enter Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="Email" placeholder="Enter Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicSubject">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="Subject" placeholder="Enter Subject" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>

            {/* <div>
                <img src="https://i.imgur.com/px6cNb.png" alt="contact" />
                <div className="form container">

                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputName1">Name</label>
                            <input type="Name" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="Email" className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputSubject1">Subject</label>
                            <input type="Subject" className="form-control" id="exampleInputSubject1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div> */}
        </div>
    );
}

export default Contact;