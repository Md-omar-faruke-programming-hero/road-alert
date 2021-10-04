import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import "./Home.css"

const Home = () => {
    const [course,setCourse]= useState([]);
    useEffect(()=>{
        fetch("./courses.JSON")
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    return (
        <div>
            <h3 className="title text-center bg-success">Our Most Popular Courses</h3>
            <Row xs={1} md={4} className="g-0 container m-auto">
            {
                course.map(course=><Course key={course.name} course={course}></Course>)
            }
            </Row>
            
  
          
        </div>
    );
};

export default Home;