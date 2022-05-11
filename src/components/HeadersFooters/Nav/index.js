import React from 'react';
import MenuLinks from '../../Links/MenuLinks/index.js';
import { Col } from 'react-bootstrap';

function Nav() {

    return (
        <nav className="brand-color">
            {/* <Container> */}
            {/* <Row className='justify-content-between'> */}
            <Col className='logo-container'>
                <h1 className="navbar-logo">JARED I.A</h1>
            </Col>
            {/* </Container> */}
            {/* <Container> */}
            <Col className='links-container'>
                <MenuLinks />
            </Col>
            {/* </Container> */}
            {/* </Row> */}
        </nav>
    )
}


export default Nav