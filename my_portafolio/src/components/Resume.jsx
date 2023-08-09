import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import myResume from '../assets/files/LDMS-CV-2023-07.pdf';
import './css/resume.css';
export default function Resume({ colorTheme }) {
  const themeTextColor = {
    color: colorTheme ? 'white' : '#363537',
  };
  return (
    <div className="resume_container" style={themeTextColor}>
      <h1>Resume</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '1.5rem',
        }}
      >
        <Card style={{ width: '18rem', marginTop: '2%' }}>
          <Card.Body>
            <Card.Title style={{ fontWeight: '900' }}>
              Front-End Proficiencies
            </Card.Title>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>HTML</ListGroup.Item>
            <ListGroup.Item>CSS</ListGroup.Item>
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>Jquery</ListGroup.Item>
            <ListGroup.Item>Bootstrap</ListGroup.Item>
            <ListGroup.Item>Tailwind CSS</ListGroup.Item>
            <ListGroup.Item>Responsive Designs</ListGroup.Item>
            <ListGroup.Item> Progressive Web App (PWA)</ListGroup.Item>
          </ListGroup>
        </Card>
        <Card style={{ width: '18rem', marginTop: '2%' }}>
          <Card.Body>
            <Card.Title style={{ fontWeight: '900' }}>
              Back-End Proficiencies
            </Card.Title>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>API's</ListGroup.Item>
            <ListGroup.Item>Node</ListGroup.Item>
            <ListGroup.Item>Express</ListGroup.Item>
            <ListGroup.Item>MySQL, Sequelize</ListGroup.Item>
            <ListGroup.Item>MongoDB, Mongoose</ListGroup.Item>
            <ListGroup.Item>REST</ListGroup.Item>
            <ListGroup.Item>GraphQL</ListGroup.Item>
            <ListGroup.Item>Java</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <Button
        variant={colorTheme ? 'light' : 'dark'}
        style={{
          marginTop: '5%',
          boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        }}
      >
        <a
          className="nav-link"
          href={myResume}
          download="resume_David-Mondragon"
        >
          Download CV
        </a>
      </Button>
    </div>
  );
}
