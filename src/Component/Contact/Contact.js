import React from 'react';
import { Form ,Button} from 'react-bootstrap';
import pic from "../../Image/Contact Us.jpg"

const Contact = () => {
    return (
        <div>
            <h3 className="title text-center mb-4 mt-2">Contact us</h3>
            <div className="d-flex align-content-center justify-content-center container m-auto">
            <div className="ms-5 mt-5">
            <Form>
                <Form.Group className="mb-3 w-75 border border-danger border-4 rounded-pill" controlId="formBasicEmail">
                  
                    <Form.Control type="text" placeholder="Enter your name" />
                    
                </Form.Group>

                <Form.Group className="mb-3 w-75 border border-success border-4 rounded-pill" controlId="formBasicPassword">
                  
                    <Form.Control type="email"  placeholder="Enter your email" />
                </Form.Group>
                <textarea className="shadow-lg p-4" id="w3review" placeholder="message" name="w3review" rows="4" col="50" resize="none" cols="50"/><br />
               
                <Button className="btn btn-danger" type="submit">Submit</Button>
                </Form>
            </div>
            <div className="ms-5">
                <img src={pic} className="w-75" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Contact;