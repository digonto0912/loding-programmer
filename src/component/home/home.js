// import
import "./home.css";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/Spotify-Loading-Animation-4.gif'
import { Carousel, Row, Col, Card } from "react-bootstrap";


// home function
const Home = () => {

  // api
  const [infos, setinfos] = useState([]);

  // api json
  useEffect(()=>{
    fetch("./API-4.json")
    .then(res => res.json())
    .then(data => setinfos(data))
  } ,[]);


    return (
        // header Carousel
        <div className="body">
            
            {/* Carousel */}
            {/* 1 */}

              <Carousel fade>
                <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={logo}
                  alt="First slide"
                  />
                  
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* 2 */}
                <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={logo}
                  alt="Second slide"
                  />
                  
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* 3 */}
                <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={logo}
                  alt="Third slide"
                  />
                  
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="black" fill-opacity="1" d="M0,160L26.7,160C53.3,160,107,160,160,160C213.3,160,267,160,320,181.3C373.3,203,427,245,480,261.3C533.3,277,587,267,640,240C693.3,213,747,171,800,154.7C853.3,139,907,149,960,128C1013.3,107,1067,53,1120,48C1173.3,43,1227,85,1280,112C1333.3,139,1387,149,1413,154.7L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
                </svg>
              

              
              {/* card */}
              <div className="cardsStyles">
                {
                infos.map(info => <>
                <Row xs={1} md={2} className="g-4 cardsStyle mb-5">
                  <Col className="colstyle">
                  <Card>

                    {/* card image */}
                    <Card.Img variant="top" src={info.img} className="imgSize" />
                    <Card.Body>

                      {/* card name */}
                      <Card.Title>{info.name}</Card.Title>

                      {/* card title */}
                      <Card.Text>
                        {info.title}
                      </Card.Text>

                      {/* card price */}
                      <h3>{info.price}</h3>
                    </Card.Body>
                  </Card>
                  </Col>
                </Row>
              </>)
              }
            </div>
        </div>
    );
};

export default Home;