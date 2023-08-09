import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profilePic from '../images/howl.jpeg';
import { useTheme } from '../utils/ThemeContext';
import { reducer } from '../utils/reducers';
import { useState, useReducer } from 'react';
import './css/main.css';
import { BsStackOverflow } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import designLogo from '../images/webDesign.svg';
import reactLogo from '../images/toolImages/reactTool.svg';
import nodeLogo from '../images/toolImages/nodeTool.svg';
import mongoLogo from '../images/toolImages/mongoTool.svg';
import handlebarsLogo from '../images/toolImages/handlebarsTool.svg';
import mysqlLogo from '../images/toolImages/mysqlTool.svg';
import jqueryLogo from '../images/toolImages/jqueryTool.svg';
import techLogo from '../images/toolImages/rocketLogo.svg';
import figmaLogo from '../images/toolImages/figmaLogo.svg';
import adobeLogo from '../images/toolImages/adobeLogo.svg';
import xdLogo from '../images/toolImages/xdLogo.svg';
import expressLogo from '../images/toolImages/expressLogo.svg';
import Card from './Card';

function MainLayout() {
  const initialState = useTheme();
  const [state, dispatch] = useReducer(reducer, initialState);
  const themStyle = {
    backgroundColor: state.darkTheme ? '#363537' : '#F8F9FA',
    marginRight: 'auto',
    marginLeft: 'auto',
  };

  console.log(state.darkTheme);
  const customStyle = {
    color: '#363537',
    marginTop: '20%',
  };
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
  </style>;

  return (
    <Container className="main_layout">
      <Row>
        <Col sm={4} md={5} lg={7}>
          <div style={customStyle}>
            <h1>David Mondragon Saiz</h1>
            <p className="about_me">
              As a computer systems engineer with a year of experience in web
              development, I am passionate about the transformative power of
              software. I believe that well-designed applications have the
              potential to significantly improve our lives and solve complex
              problems. Throughout my career, I have cultivated a strong skill
              set in developing high-quality, user-centric applications.
            </p>
          </div>
        </Col>
        <Col sm={4} md={5} lg={5}>
          <div className="image_div">
            <Image
              className="profile_image"
              src={profilePic}
              thumbnail
              alt="profle-pic"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <div className="network_icons">
          <a href="https://github.com/mondragonSaiz" target="_blank">
            <AiFillGithub className="cursor-pointer hover:text-slate-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/davidmondragonsaiz/"
            target="_blank"
          >
            <AiFillLinkedin className="cursor-pointer hover:text-slate-600" />
          </a>
          <a href="#">
            <BsStackOverflow
              className="cursor-pointer hover:text-slate-600"
              target="_blank"
            />
          </a>
        </div>
      </Row>

      <Row>
        <Col sm={4} md={6} lg={6}>
          <Card>
            <div
              style={{
                textAlign: 'center',
                paddingTop: '2%',
              }}
            >
              <img
                className="tool_img"
                alt=""
                src={techLogo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
              <h3> Technologies </h3>
            </div>

            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                flexWrap: 'wrap',
                padding: '5%',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <img
                className="tool_img"
                alt=""
                src={mongoLogo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
              <img
                className="tool_img"
                alt=""
                src={expressLogo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />

              <img
                alt=""
                src={reactLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
              <img
                alt=""
                src={nodeLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
              <img
                alt=""
                src={handlebarsLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
              <img
                alt=""
                src={mysqlLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
              <img
                alt=""
                src={jqueryLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
            </div>
          </Card>
        </Col>

        <Col sm={4} md={6} lg={6}>
          <Card>
            <div
              style={{
                textAlign: 'center',
                paddingTop: '2%',
              }}
            >
              <img
                alt=""
                src={designLogo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
              <h3>UI /UX Design</h3>
            </div>

            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                flexWrap: 'wrap',
                padding: '5%',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <img
                alt=""
                src={figmaLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
              <img
                alt=""
                src={adobeLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
              <img
                alt=""
                src={xdLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MainLayout;
