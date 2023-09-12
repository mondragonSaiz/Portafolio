import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { BsFillMoonFill } from 'react-icons/bs';
import { GiMoon } from 'react-icons/gi';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/images/logo_portafolio.png';
import './css/navbar.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
function Mynav({ handlePageChange }) {
  const ctxTheme = useContext(ThemeContext);
  const { themeGlobalState, dispatch } = ctxTheme;
  const toggleThemeIconStyle = {
    color: themeGlobalState.darkTheme ? 'Black' : '#EBBA17',
  };
  return (
    <Navbar
      expand="lg"
      bg={themeGlobalState.darkTheme ? 'light' : 'dark'}
      data-bs-theme={themeGlobalState.darkTheme ? 'light' : 'dark'}
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
                onClick={() =>
                  dispatch({
                    type: 'TOGGLE_ACTION',
                    payload: !themeGlobalState.darkTheme,
                  })
                }
              />
            </li>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynav;
