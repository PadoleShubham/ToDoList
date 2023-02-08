import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import  logo  from '../images/logo.png';
function Header(){
    return (
        <header>
             <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={logo}
                        width="50"
                        height="40"
                        className="d-inline-block align-top"
                        />{' '}
                        ToDO App
                    </Navbar.Brand>
                </Container>
             </Navbar>
        </header>
    );

}
export default Header;