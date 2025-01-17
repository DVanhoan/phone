import phone from "../../assets/product/IPhone11.png";
import { Container, Carousel, Button } from 'react-bootstrap';

export const Slider = () => (
    <Carousel className="mt-2">
        <Carousel.Item>
            <div
                className="d-flex align-items-center bg-light"
                style={{
                    height: "450px",
                    padding: "20px"
                }}
            >
                <Container className="d-flex justify-content-between align-items-center">
                    <div className="text-content" style={{ flex: 1, paddingRight: "20px" }}>
                        <h2 className="fw-bold mb-3">SAM SUNG S21 PLUS</h2>
                        <p className="mb-2">S21 - PLUS - ULTRA</p>
                        <p className="mb-4">256GB - 512GB - 1TB</p>
                        <Button variant="secondary" className="fw-bold">
                            MUA NGAY
                        </Button>
                    </div>
                    <div className="image-content" style={{ flex: 1, textAlign: "right" }}>
                        <img
                            src={phone}
                            alt="Samsung S21 Plus"
                            className="img-fluid"
                            style={{ maxWidth: "310px", height: "auto" }}
                        />
                    </div>
                </Container>
            </div>
        </Carousel.Item>
    </Carousel>
);
