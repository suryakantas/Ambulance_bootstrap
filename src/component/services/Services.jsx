import "./services.css"
import { Col, Container, Row } from 'react-bootstrap'

export default function Services() {
    return (
        <div className="services">
                <Container className="textContainer">
                    <Row>
                        <Col>
                            <h3 className>Our Ambulance Service</h3>
                        </Col>
                        <Col>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos</p>
                        </Col>
                    </Row>
                </Container>
                <Container className="txtimageContainer">
                    <Row>
                        <Col className="txtList">
                            <h3>ICU Ambulance</h3>
                            <div>
                                <li>Odisha's best Ambulance Service</li>
                                <li>Odisha's only</li>
                                <li>We give primery treatment's</li>
                                <li>Farmasist for taking care.</li>
                            </div>
                        </Col>
                        <Col>
                            <img src="assets/ambulance.jpg" alt="" />
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}
