import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { BsFillMoonFill } from 'react-icons/bs';
import { GiMoon } from 'react-icons/gi';
import Navbar from 'react-bootstrap/Navbar';
import { useTheme } from '../utils/ThemeContext';
import { reducer } from '../utils/reducers';
import { TOGGLE_THEME } from '../utils/actions';
import logo from '../assets/images/logo_portafolio.png';
import './css/navbar.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useReducer } from 'react';

function Mynav({ currentPage, handlePageChange, colorTheme, setColorTheme }) {
  const initialState = useTheme();

  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleThemeIconStyle = {
    color: colorTheme ? 'Black' : '#EBBA17',
  };
  return (
    <Navbar
      expand="lg"
      bg={colorTheme ? 'light' : 'dark'}
      data-bs-theme={colorTheme ? 'light' : 'dark'}
    >
      <Container fluid>
        <Navbar.Brand href="#home" onClick={() => handlePageChange('Home')}>
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link
              href="#portafolio"
              onClick={() => handlePageChange('Portafolio')}
            >
              Portafolio
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange('Contact')}
            >
              Contact
            </Nav.Link>
            <Nav.Link href="#Resume" onClick={() => handlePageChange('Resume')}>
              Resume
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <li>
              <GiMoon
                style={toggleThemeIconStyle}
                className="themLogo"
                onClick={() => setColorTheme(!colorTheme)}
              />
            </li>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynav;
