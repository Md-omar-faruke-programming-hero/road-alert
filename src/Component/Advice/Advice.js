import React from 'react';
import pic1 from "../../Image/Driving-school-in-dhaka.jpg"
import pic2 from "../../Image/international-driving-license-bd.jpg"
import pic3 from "../../Image/dhaka-driving-school.jpg"
import pic4 from "../../Image/driving-training-center-in-dhaka.jpg"
import pic5 from "../../Image/driving-school-in-dhanmondi.jpg"
import pic6 from "../../Image/driving-license-bangladesh.jpg"

const Advice = () => {
    return (
        <div>
            <h3 className="title text-center mb-4 mt-2">Driving Advice & Traffic Sign</h3>
               <div className="ms-5">
               <img src={pic1}  alt="" />
                <img src={pic2} alt="" />
                <img src={pic3} alt="" />
                <img src={pic4} alt="" />
                <img src={pic5} alt="" />
                <img src={pic6} alt="" />

               </div>
        </div>
    );
};

export default Advice;