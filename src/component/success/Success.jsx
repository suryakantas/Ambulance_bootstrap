import "./success.css"
import { Row , Col , Container } from "react-bootstrap"

export default function Success() {
    return (
        <div class="success">
            <Row>
            <Container className="txtimageContainer ">
                    <Row >
                        <Col className="txtSuccess">
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
            </Row>
        </div>
    )
}
