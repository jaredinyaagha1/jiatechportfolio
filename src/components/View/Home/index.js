import profilePic from '../../../assets/images/blackGuy.jpg';
import SocialLinks from '../../Links/SocialLinks/index.js';
import CTA from '../../Links/CTA/index.js';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../../index.scss';



let isMobile;
const Home = () => {
    // console.log(window.innerWidth)
    if (window.innerWidth < 400) {
        isMobile = true;
        // console.log('isMobile: ', isMobile);
    }
    else {
        isMobile = false;
        // console.log('isMobile: ', isMobile);
    }

    return (
        <Card id="home" className="view d-flex align-items-center justify-content-center">
            <Container className="py-5 text-center">
                <Row className="d-flex align-items-center justify-content-center">
                    <Col className="homeName" >
                        <h4 id='firstName'> JARED INYA-AGHA </h4>
                        <h2 className="dark-shade title1" id='title1'> SOFTWARE ENGINEER </h2>
                        <h4 className="title1"> ELECTRICAL ENGINEER </h4>
                        <h4 className="title1"> ENTREPRENEUR </h4>
                        <div className='mt-5'>                            
                        <CTA />
                        </div>
                        {/* <Row>
                            <Col>
                                <Button href="#contact">LET'S TALK</Button>
                            </Col>
                            <Col>
                                <Button href="#">DOWNLOAD <svg className="buttonSvg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg>
                                </Button>
                            </Col>
                        </Row> */}
                    </Col>
                    <Col>
                        <img className='profilePic' src={profilePic} alt='profile' />
                        {/* <div> JARED INYA-AGHA </div> */}
                    </Col>
                    <Col className="pt-4">
                        <ul className='homePageLinks'>
                            <SocialLinks isHorizontal={false} isMobile={isMobile} />
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}
export default Home;
