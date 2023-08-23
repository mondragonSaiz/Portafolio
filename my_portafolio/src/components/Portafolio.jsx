import React from 'react';
import './css/portafolio.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import roomieHunt from '../assets/images/projectImgaes/roomieHunt.png';
import myFigure from '../assets/images/projectImgaes/myfigureCollection.png';
import techBlog from '../assets/images/projectImgaes/techblog.png';
import timedQuiz from '../assets/images/projectImgaes/timedQuiz.png';
import weatherDashboard from '../assets/images/projectImgaes/weatherDashboard.png';
import fridge2table from '../assets/images/projectImgaes/fridge2tablee.png';
import goalhub from '../assets/images/projectImgaes/goalhub.png';
export default function Portafolio() {
  const customCards = [
    {
      imgSrc: goalhub,
      title: 'GoalHub',
      text: 'Write, plan, collaborate and organize your goals. - GoalHub is all you need - in one space.',
      link: 'https://goalhub-5f7766233267.herokuapp.com/',
    },
    {
      imgSrc: roomieHunt,
      title: 'RoomieHunt',
      text: 'RoomieHunt is a mobile/web application designed to help users find compatible roommates for shared living spaces.',
      link: 'https://arcane-tundra-44281-d362c28aef30.herokuapp.com/',
    },
    {
      imgSrc: techBlog,
      title: 'TechBlog',
      text: 'CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.',
      link: 'https://techblog88-cde01ad58ecb.herokuapp.com/',
    },
    {
      imgSrc: myFigure,
      title: 'MyFigureCollection',
      text: 'user-friendly app designed for figure collectors to easily manage and track their collections.',
      link: 'https://github.com/mondragonSaiz/myFigure_Collection',
    },

    {
      imgSrc: fridge2table,
      title: 'Fridge2Table',
      text: 'app that simplifies your meal planning. Input the ingredients you currently have available, and the app instantly generates a selection of recipes tailored to your ingredients.',
      link: 'https://mondragonsaiz.github.io/Fridge2Table/',
    },
    {
      imgSrc: timedQuiz,
      title: 'Timed Quiz',
      text: 'fast-paced timed quiz app that challenges your knowledge against the clock. Race against time to answer a series of engaging questions spanning various topics.',
      link: 'https://mondragonsaiz.github.io/timed-quiz/',
    },
    {
      imgSrc: weatherDashboard,
      title: 'Weather Dashboard',
      text: 'Instantly check current weather conditions and forecasts with our sleek dashboard app.',
      link: 'https://mondragonsaiz.github.io/weather-dashboard/',
    },

    // Add more custom cards as needed
  ];
  return (
    <div className="portafolio_container">
      <Row xs={1} md={2} className="g-4">
        {customCards.map((card, idx) => (
          <Col key={idx}>
            <a href={card.link} className="card-link" target="_blank">
              <Card className="project-card box2">
                <Card.Img variant="top" src={card.imgSrc} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}
