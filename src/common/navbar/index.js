import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo";

function Header() {
  return (
    <>
      <Navbar bg="white" expand="md" sticky="top" className="p-0">
        <Navbar.Brand href="/" className="p-0">
          <Logo small />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="p-0">
          <Nav className="ms-5 me-auto" style={{ fontSize: 20 }}>
            <Nav.Link active href={"/gallery"}>
              <i>Gallery</i>
            </Nav.Link>
            <Nav.Link href={"/products"}>
              <i>Products</i>
            </Nav.Link>
            <Nav.Link href={"/gallery"}>
              <i>Latest</i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div
        style={{
          height: 0.5,
        }}
        className="bg-dark"
      ></div>
    </>
  );
}

export default Header;
