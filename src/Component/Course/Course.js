import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Course = (props) => {
   const {name,title,img} =props.course;
    return (
    <div className="m-auto">
    <Col>
      
        <Card.Img variant="top" className="ms-4 p-4 h-25 w-75 align-items-center" src={img} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text>
            {title}
          </Card.Text>
        </Card.Body> <br />

        <p className="text-center"><Button className="bg-danger "> read more</Button></p> 
       
    </Col>
    
    </div>
    );
};

export default Course;