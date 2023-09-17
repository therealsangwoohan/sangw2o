import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar expand="lg" bg="white" variant="light" className="border-0">
      <Container>
        <Nav></Nav>
        <Nav>
          <Nav.Link href="/">🏠</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;