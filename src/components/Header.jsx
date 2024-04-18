import Container from "react-bootstrap"
import Navbar from "react-bootstrap/Navbar"

export default function Header(){
  return (
    <Navbar className='main-heading'>
        <Container>
            <Navbar.Brand>React Week</Navbar.Brand>
        </Container>
    </Navbar>
  )
}

