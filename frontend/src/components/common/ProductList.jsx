import { Container, Row, Col, Card } from 'react-bootstrap';



export const ProductList = () => (
    <Container Container className="mt-5" >
        <h3 className="mb-4">DANH SÁCH SẢN PHẨM</h3>
        <Row>
            {[
                {
                    title: 'IPHONE 12 PRO',
                    price: '23.890.000 đ',
                    oldPrice: '24.990.000 đ',
                    img: 'https://via.placeholder.com/200x200',
                },
                {
                    title: 'IPHONE 12 PRO MAX',
                    price: '25.890.000 đ',
                    oldPrice: '26.990.000 đ',
                    img: 'https://via.placeholder.com/200x200',
                },
                {
                    title: 'IPHONE 12',
                    price: '16.890.000 đ',
                    oldPrice: '17.990.000 đ',
                    img: 'https://via.placeholder.com/200x200',
                },
                {
                    title: 'SAMSUNG S21 PLUS',
                    price: '19.890.000 đ',
                    oldPrice: '21.990.000 đ',
                    img: 'https://via.placeholder.com/200x200',
                },
            ].map((product, index) => (
                <Col md={3} key={index}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                <div className="text-muted text-decoration-line-through">
                                    {product.oldPrice}
                                </div>
                                <div className="fw-bold">{product.price}</div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
)