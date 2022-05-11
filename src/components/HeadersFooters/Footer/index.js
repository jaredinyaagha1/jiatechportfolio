import React from 'react';
import SocialLinks from '../../Links/SocialLinks/index.js';
import { Row, Col, Container } from 'react-bootstrap';

function Footer() {
    if (window.innerWidth < 400) {
        var isMobile = true;
        // console.log('isMobile: ', isMobile);
    }
    else {
        isMobile = false;
        // console.log('isMobile: ', isMobile);
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {/* <h1>Footer</h1> */}
                        <ul className='footerLinks text-center'>
                            <SocialLinks isHorizontal={true} isMobile={isMobile} />

                        </ul>
                        Back to top <a href="#top">🎈</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;