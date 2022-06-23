import React from 'react';
import SocialLinks from '../../Links/SocialLinks/index.js';
import { Row, Col } from 'react-bootstrap';

let isMobile;

function Footer() {
    if (window.innerWidth < 400) {
        isMobile = true;
        // console.log('isMobile: ', isMobile);
    }
    else {
        isMobile = false;
        console.log('isMobile: ', isMobile);
    }
    return (
        <div>
            <Row className="footer">
                <Col className='text-center'>
                    {/* <h1>Footer</h1> */}
                    <ul className='footerLinks'>
                        <SocialLinks isHorizontal={true} isMobile={false} />

                    </ul>
                    Back to top <a href="#top">🎈</a>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;