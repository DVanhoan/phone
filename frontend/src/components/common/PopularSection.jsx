import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import samsungs21 from "../../assets/product/samsungs21.jpg";
import iphone12pro from "../../assets/product/newsiphone-12-pro-1.jpg"


export const PopularSection = () => (
    <Container className="mt-5 text-center">
        <h3>PHỔ BIẾN HIỆN NAY</h3>
        <div className="d-flex justify-content-center mt-3">
            {['IPHONE 12 PRO', 'IPHONE 12', 'SAM SUNG S21 PLUS', 'XIAOMI MI 11'].map((item, index) => (
                <Button key={index} variant="outline-secondary" className="mx-2">
                    {item}
                </Button>
            ))}
        </div>
        <Row className="mt-4">
            <Col md={6}>
                <Card>
                    <Card.Img
                        variant="top"
                        src={samsungs21}
                        alt="Samsung Galaxy S21"
                    />
                    <Card.Body>
                        <Card.Title>Samsung Galaxy S21</Card.Title>
                        <Card.Text>Kiến tạo sức mạnh vượt trội, camera zoom 128px</Card.Text>
                        <Button variant="primary">Xem thêm</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card>
                    <Card.Img
                        variant="top"
                        src={iphone12pro}
                        alt="iPhone 12 Pro"
                    />
                    <Card.Body>
                        <Card.Title>iPhone 12 Pro</Card.Title>
                        <Card.Text>Sức mạnh toàn diện, hệ điều hành iOS</Card.Text>
                        <Button variant="primary">Xem thêm</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);