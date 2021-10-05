import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Autocar from '../Autocar/Autocar';
import BikeScooter from '../Bike-Scooter/BikeScooter';
import Manualcar from '../Manualcar/Manualcar';
// auto car
const Coursefee = () => {
    const[auto,setAuto]= useState([]);
    useEffect(()=>{
        fetch("./autocar.JSON")
        .then(res=>res.json())
        .then(data=>setAuto(data));
    },[])

    // manual car
    const[manual,setManual]= useState([]);
    useEffect(()=>{
        fetch("./manualcar.JSON")
        .then(res=>res.json())
        .then(data=>setManual(data));
    },[])

    // Bike & Scooter
    const[bikeScooter,setBikeScooter]= useState([]);
    useEffect(()=>{
        fetch("./bikeScooter.JSON")
        .then(res=>res.json())
        .then(data=>setBikeScooter(data));
    },[])


    return (
        <div>
            <h3 className="title text-center mb-2">Course details for "Auto private car"</h3>
            <Row xs={1} md={3} className="g-1 container m-auto mb-2">
            {
                auto.map(fee=><Autocar key={fee.name} fee={fee}></Autocar>)
            }
            </Row>
            <hr />
            <h3 className="title text-center mb-2">Course details for "Manual private car"</h3>
            <Row xs={1} md={3} className="g-1 container m-auto mb-2">
            {
                manual.map(fee=><Manualcar key={fee.name} fee={fee}></Manualcar>)
            }
            </Row>
            <hr />
            <h3 className="title text-center mb-2">Course details for "Bike & Scooter"</h3>
            <Row xs={1} md={3} className="g-1 container m-auto mb-2">
            {
               bikeScooter.map(fee=><BikeScooter key={fee.name} fee={fee}></BikeScooter>)
            }
            </Row>

        </div>
    );
};

export default Coursefee;