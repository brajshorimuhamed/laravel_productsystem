import { Container, Nav, Navbar } from "react-bootstrap";

const AppHeader = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
        <Navbar.Brand href="#">PRODUKTET TONA..</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Product List</Nav.Link>
            <Nav.Link href="#">Register Product</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
        </Navbar>
    );
};

export default AppHeader;