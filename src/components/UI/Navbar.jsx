import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, useLocation} from 'react-router-dom';


function OffcanvasExample() {
    const expand="sm";
    const priority = {
        zIndex: 9999,
        width: "100%",
      };
      const currentPage= useLocation().pathname;
  return (
    <>
        <Navbar fixed="top" style={priority}
        key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Devan Ash's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  
                <Link to="/"
                  className={currentPage === '/' ? 'nav-link active': 'nav-link'}
                  >
                    Home
                  </Link>

                  <Link to="/AboutPage"
                  className={currentPage === '/AboutPage' ? 'nav-link active': 'nav-link'}
                  >
                    About Me
                  </Link>

                  <Link to="/ContactPage"
                  className={currentPage === '/ContactPage' ? 'nav-link active': 'nav-link'}
                  >Contact Me</Link>

                  <Link to="/PortfolioPage"
                  className={currentPage === '/PortfolioPage' ? 'nav-link active': 'nav-link'}>Portfolio</Link>

                  <Link to="/ResumePage"
                  className={currentPage === '/ResumePage' ? 'nav-link active': 'nav-link'}>Resume</Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  );
}

export default OffcanvasExample;