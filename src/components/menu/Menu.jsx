import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './Menu.css';

const Menu = () => {
  return (
    <>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/works">Works</Link>
            <Link to="/contact">Contact us</Link>
          </Nav>
            <div className="menuIcon">
                <ul>
                    <li><Link><FaFacebookF/></Link></li>
                    <li><Link><FaTwitter/></Link></li>
                    <li><Link><FaInstagram/></Link></li>
                    <li><Link><FaLinkedin/></Link></li>
                </ul>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Menu