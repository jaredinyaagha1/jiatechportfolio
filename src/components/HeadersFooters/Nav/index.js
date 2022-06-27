import React from 'react';
import NavLinks from '../../Links/NavLinks/index.js';
import { Col } from 'react-bootstrap';
import { Link } from 'react-scroll'

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
                {/* <a href="#" className="navbar-logo light-shade">JARED I.A</a> */}
                <Link
                    activeClass="active"
                    // to="#top"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className="navbar-logo light-shade">
                    JARED.IA
                </Link>
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