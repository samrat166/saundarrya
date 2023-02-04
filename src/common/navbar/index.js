import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo";

function Header() {
  return (
    <>
      <Navbar
        bg="white"
        expand="md"
        sticky="top"
        className="p-0"
        style={{ height: "75px", opacity: 0.9 }}
      >
        <Navbar.Brand href="/" className="p-0">
          <Logo small />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2" />
        <Navbar.Collapse id="basic-navbar-nav" className="p-0">
          <Nav
            className="ms-5 me-auto"
            style={{ fontSize: 20, fontWeight: 300 }}
          >
            <Nav.Link className="ms-2" active href={"/new-arrival"}>
              New Arrivals
            </Nav.Link>
            <Nav.Link className="ms-2" href={"/products"}>
              Clothing
            </Nav.Link>
            <Nav.Link className="ms-2" href={"/gallery"}>
              Dresses
            </Nav.Link>{" "}
            <Nav.Link className="ms-2" href={"/gallery"}>
              Bags
            </Nav.Link>
            <Nav.Link className="ms-2" href={"/gallery"}>
              Sunglass
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
