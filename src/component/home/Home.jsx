import "./home.css"
import { Carousel , Container , Row , Col } from 'react-bootstrap';
import "animate.css"


export default function Home() {
    return (
        <div className="home" id="home">
                   <Row className="textRow">
                       <Container className="textContainer">
                           <Row className="innerRow">
                                <Col className="left">
                                    <h3 className="animate__animated animate__slideInLeft">Lorem ipsum dolor sit amet <br/> consectetur adipisicing</h3>
                                </Col>
                                <Col className="right">
                                    <p className="animate__animated animate__slideInRight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, itaque ad! Voluptate perferendis quibusdam vitae.</p>
                                </Col>
                           </Row>
                        
                       </Container> 
                   </Row>
                   <Container className="videoContainer">
                   <Row>
                   <div className="videoContainer animate__animated animate__slideInUp">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="assets/slider4.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="assets/slider5.jpg"
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="assets/slider6.jpg"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                   </Row>
               </Container>
    
                
                
        </div>
    )
}
