import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);


    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };


    window.addEventListener("resize", handleResize);

    return (
        <div>
            <Navbar bg="light" expand="lg" className="shadow-sm">
                <Container>

                    <Navbar.Brand href="#">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Logo"
                            style={{ width: "40px" }}
                        />
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav>
                            <Nav.Link href="#">Trang chủ</Nav.Link>
                            <NavDropdown title="Hãng điện thoại" id="brand-dropdown">
                                <NavDropdown.Item href="#">iPhone</NavDropdown.Item>
                                <NavDropdown.Item href="#">Samsung</NavDropdown.Item>
                                <NavDropdown.Item href="#">Xiaomi</NavDropdown.Item>
                                <NavDropdown.Item href="#">V Smart</NavDropdown.Item>
                                <NavDropdown.Item href="#">Oppo</NavDropdown.Item>
                                <NavDropdown.Item href="#">Vivo</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Loại sản phẩm</Nav.Link>
                            <Nav.Link href="#">Tin công nghệ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>


                    {isMobile ? (

                        <Nav className="align-items-center">
                            <Nav.Link href="#" className="d-flex align-items-center">
                                🛒
                            </Nav.Link>
                        </Nav>
                    ) : (

                        <Nav className="flex-row align-items-start">
                            <Nav.Link href="#" className="d-flex align-items-center">
                                + Trợ giúp
                            </Nav.Link>
                            <Nav.Link href="#" className="d-flex align-items-center">
                                Đăng nhập
                            </Nav.Link>
                            <Nav.Link href="#" className="d-flex align-items-center">
                                🛒 Giỏ hàng
                            </Nav.Link>


                        </Nav>


                    )}
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
