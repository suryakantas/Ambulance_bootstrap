import { Container } from "@material-ui/core"
import { Col, Row } from "react-bootstrap"
import "./contactus.css"

export default function Contactus() {
    return (
        <div className="contact">
            <Row>
                <Container>
                    <Row>
                        <Col>
                            <h3>Bhubaneswar<br/>Ambulance</h3>
                        </Col>
                        <Col className="contactlist">
                            <h4>Our Services</h4>
                            <li>Service1</li>
                            <li>Service2</li>
                            <li>Service3</li>
                            <li>Service4</li>
                        </Col>
                        <Col className="contactlist">
                            <h4>Contact Us</h4>
                            <li>Address: Bhubaneswar , Odisha</li>
                            <li>Email: amulance149@gmail.com</li>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </div>
    )
}
