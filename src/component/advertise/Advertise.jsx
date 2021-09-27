import { Row , Col , Container } from "react-bootstrap"
import "./advertise.css"

export default function Advertise() {
    return (
        <div className="advertise">
            <Row>
            <Container className="txtimageContainer">
                    <Row>
                        <Col>
                            <img src="assets/ambulance.jpg" alt="" />
                        </Col>
                        <Col className="txtList">
                            <h3>ICU Ambulance</h3>
                            <div>
                                <li>Odisha's best Ambulance Service</li>
                                <li>Odisha's only</li>
                                <li>We give primery treatment's</li>
                                <li>Farmasist for taking care.</li>
                            </div>
                        </Col>  
                    </Row>
                </Container>
            </Row>
        </div>
    )
}
