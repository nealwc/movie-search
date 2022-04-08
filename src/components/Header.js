import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Movie Search</Navbar.Brand>
                {/*
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
    */}
            </Container>
        </Navbar>
    )
}

export default Header