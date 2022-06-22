import React from 'react';
import MenuLinks from '../../Links/MenuLinks/index.js';
import { Col } from 'react-bootstrap';

let isMobile;
function Nav() {
    // console.log(window.innerWidth)
    if (window.innerWidth < 400) {
        isMobile = true;
        console.log('isMobile: ', isMobile);
    }
    else {
        isMobile = false;
        // console.log('isMobile: ', isMobile);
    }


    return (
        <nav className="brand-color p-4">
            {/* <Container> */}
            {/* <Row className='justify-content-between'> */}
            <Col className='logo-container'>
                <h1 className="navbar-logo">JARED I.A</h1>
            </Col>
            {/* </Container> */}
            {/* <Container> */}
            <Col className='links-container '>
                <ul>
                    <MenuLinks isMobile={isMobile} />
                </ul>
            </Col>
            {/* </Container> */}
            {/* </Row> */}
        </nav>
    )
}


export default Nav