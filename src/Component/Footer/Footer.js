import React from 'react';
import {  NavLink } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
       <div>
            <div className="d-flex justify-content-around bg-light">
              <div>
                <h1>Mogbazar Branch</h1><br />
                <p>Bangladesh Driving Training Institute, Mogbazar</p>
                <p>Address: House-1 (Floor-2) , Rd No: 2,</p>
                <p>Mogbazar, Dhaka 1205</p>
                <p>Phone: 01813-118833</p>
              </div>
              <div>
                <h1>Mouchak Branch</h1><br />
                <p>Bangladesh Driving Training Institute, Mouchak</p>
                <p>House: 54/A (1st floor), Road: 132</p>
                <p>Mouchak 1, Dhaka 1212</p>
                <p>Phone: 01813118833</p>
              </div>
              </div>
              <div className="text-center bg-light bg-dark text-light mb-2">
              <NavLink to="/"><i className=" fab fa-facebook fa-2x text-decoration-none">-</i></NavLink>
              <NavLink to="/"><i className="icon fab fa-youtube fa-2x text-decoration-none"></i></NavLink><br />
              Copyright © 2021,Md-omar-faruke-programming-hero
              </div>

       </div>
    );
};

export default Footer;