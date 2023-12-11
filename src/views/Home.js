import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  return (
    <Container className='mt-5'>
        <h1 className="display-1">Hello 👋</h1>
        <h1 className="display-1">I'm Sangwoo - developer</h1>
        <h1 className="display-1">living in Montreal 🇨🇦</h1>
        <Row>
          <Col md={1}><a href="https://www.linkedin.com/in/sangw2ohan/" style={{textDecoration: 'none'}}>LinkedIn</a></Col>
          <Col md={1}><a href="https://github.com/therealsangwoohan" style={{textDecoration: 'none'}}>GitHub</a></Col>
          <Col md={1}><a href="/resume.pdf" style={{textDecoration: 'none'}}>Resume</a></Col>
          <Col md={1}><a href="https://medium.com/@sangw2ohan" style={{textDecoration: 'none'}}>Blog</a></Col>
        </Row>
    </Container>
  )
}

export default Home;