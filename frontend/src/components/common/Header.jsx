import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="shadow-sm py-2">
                <Container className="align-items-center">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />


                    <Navbar.Brand href="#" className="d-flex align-items-center">
                        <img
                            src="/vite.svg"
                            alt="Logo"
                            style={{ width: "40px" }}
                            className="me-2"
                        />
                        <span className="fw-bold">Logo</span>
                    </Navbar.Brand>





                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-center"
                    >
                        <Nav className="me-auto">
                            <Nav.Link href="#" className="mx-2 fw-semibold">
                                Trang chủ
                            </Nav.Link>
                            <NavDropdown
                                title="Hãng điện thoại"
                                id="brand-dropdown"
                                className="mx-2 fw-semibold"
                            >
                                <NavDropdown.Item href="#">iPhone</NavDropdown.Item>
                                <NavDropdown.Item href="#">Samsung</NavDropdown.Item>
                                <NavDropdown.Item href="#">Xiaomi</NavDropdown.Item>
                                <NavDropdown.Item href="#">V Smart</NavDropdown.Item>
                                <NavDropdown.Item href="#">Oppo</NavDropdown.Item>
                                <NavDropdown.Item href="#">Vivo</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" className="mx-2 fw-semibold">
                                Loại sản phẩm
                            </Nav.Link>
                            <Nav.Link href="#" className="mx-2 fw-semibold">
                                Tin công nghệ
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>


                    <NavDropdown
                        title="Dương Văn Hoan"
                        className="d-flex align-items-center"
                    >

                        <NavDropdown.Item href="#" className="fw-semibold">
                            + Trợ giúp
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#" className="fw-semibold">
                            Đăng nhập
                        </NavDropdown.Item>
                        <Nav.Link href="#" className="fw-semibold d-flex align-items-center">
                            🛒 Giỏ hàng
                        </Nav.Link>
                    </NavDropdown>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
