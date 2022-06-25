import React from 'react';
import NavLinks from '../../Links/NavLinks/index.js';
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
            <Col className='logoCol'>
                <h1 className="navbar-logo">JARED I.A</h1>
            </Col>
            <Col className='linksCol'>
                <ul>
                    <NavLinks isMobile={isMobile} />
                </ul>
            </Col>
        </nav>
    )
}


export default Nav