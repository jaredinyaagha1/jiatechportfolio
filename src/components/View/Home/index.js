import profilePic from '../../../assets/images/blackGuy.jpg';
import SocialLinks from '../../Links/SocialLinks/index.js';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../../index.scss';

const Home = () => {
    // console.log(window.innerWidth)
    if (window.innerWidth < 400) {
        var isMobile = true;
        // console.log('isMobile: ', isMobile);
    }
    else {
        isMobile = false;
        // console.log('isMobile: ', isMobile);
    }

    return (

        <div className="py-2">
            <Card variant="sky" >
                <Card.Body>
                    <Container fluid="md" className="py-5 text-center">
                        <Row>
                            <Col>
                                <p id='firstName'> JARED INYA-AGHA </p>
                                <h3 className="dark-shade" id='title1'> FULL STACK WEB DEVELOPER </h3>
                                <p id='title2'> Electrical, Computer, and Electronics Engineer </p>
                                <p id='title3'> Novice Entrepreneur </p>
                            </Col>
                            <Col>
                                <img className='profilePic' src={profilePic} alt='profile' />  {/* <-- add alt tag */}
                                <div> JARED INYA-AGHA </div>
                            </Col>
                            <Col>
                                <ul className='homePageLinks'>
                                    <SocialLinks isHorizontal={false} isMobile={isMobile} />
                                </ul>
                            </Col>
                        </Row>

                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Home;
