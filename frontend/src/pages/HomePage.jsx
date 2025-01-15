import { Carousel, Container, Button } from "react-bootstrap";
import phone from "../assets/product/IPhone11.png";


const HomePage = () => {
    return (
        <>
            <Carousel style={{ padding: "112px" }}>
                <Carousel.Item>
                    <div className="d-flex align-items-center bg-light" style={{ height: "400px" }}>
                        <Container className="d-flex justify-content-between">
                            <div>
                                <h2 className="fw-bold">SAM SUNG S21 PLUS</h2>
                                <p>S21 - PLUS - ULTRA</p>
                                <p>256GB - 512GB - 1TB</p>
                                <Button variant="secondary" className="fw-bold">
                                    MUA NGAY
                                </Button>
                            </div>
                            <img
                                src={phone}
                                alt="Samsung S21 Plus"
                                className="img-fluid w-25"
                            />
                        </Container>
                    </div>
                </Carousel.Item>

            </Carousel>


            <Container className="text-center my-4">
                <h3 className="fw-bold">PHỔ BIẾN HIỆN NAY</h3>
            </Container>

            <Container className="my-4">
                <div className="card">
                    
                </div>
            </Container>
        </>
    );
};

export default HomePage;
