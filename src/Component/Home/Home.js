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
            <section className="section p-5 d-flex m-auto bg-light">
                <div>
                    <h1>PROFESSIONAL DRIVING <br />EDUCATION <small><sup>At your fingertips!</sup></small></h1>
                    
                </div>
                

            </section>
            <h3 className="title text-center bg-light">Our Most Popular Courses</h3>
            <Row xs={1} md={4} className="g-0 p-2 container m-auto">
            {
                course.map(course=><Course key={course.name} course={course}></Course>)
            }
            </Row>
            
  
          
        </div>
    );
};

export default Home;