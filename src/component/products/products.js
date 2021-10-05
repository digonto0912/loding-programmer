// immport
import "./products.css";
import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from "react-bootstrap"

const Products = () => {

// api
    const [infos, setinfos] = useState([]);

    useEffect(()=>{
      fetch("./API-8.json")
      .then(res => res.json())
      .then(data => setinfos(data))
    } ,[]);

    return (
        <div>

          {/* headline */}
            <h1 className="m-5 p-5"><b>All Products</b></h1>

            {/* card */}
            <div className="cardsStyles">
              {
                infos.map(info => <>
                <Row xs={1} md={2} className="g-4 cardsStyle mb-5">
                  <Col className="colstyle">
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

export default Products;