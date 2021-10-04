// import
import Button from 'react-bootstrap/button';
import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from "react-bootstrap"

// project function
const Project = () => {

  // api
    const [infos, setinfos] = useState([]);

    useEffect(()=>{
      fetch("./projectAPI.json")
      .then(res => res.json())
      .then(data => setinfos(data))
    } ,[]);

    return (
        <div>

          {/* headline */}
            <h1 className="m-5 p-5"><b>All Project</b></h1>

            {/* card */}
            <div className="cardsStyle">
              {
                infos.map(info => <>
                <Row xs={1} md={2} className="g-4 cardsStyle mb-5">
                  <Col>
                    <Card>

                      {/* card img */}
                      <Card.Img variant="top" src={info.img} className="imgSize" />
                      <Card.Body>

                        {/* card name */}
                        <Card.Title>{info.name}</Card.Title>

                        {/* card title */}
                        <Card.Text>
                          {info.title}
                        </Card.Text>

                        {/* live site button */}
                        <a target="_blank" href={info.link}><Button variant="outline-info">Live Web Project</Button></a>
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

export default Project;