import "./work.css"
import { Row , Col , Container , Card } from "react-bootstrap"

export default function Work() {
    return (
        <div className="work">
            <Row>
                <Container>
                    <h3>Why Choose Us?</h3>
                    <Row>
                        <Container>
                            <Row>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="assets/img.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="assets/img.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="assets/img.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    
                                    </Card.Body>
                                </Card>
                            </Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </Row>
        </div>
    )
}
