import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import pic from "../../Image/oops.jpg"
import "./Notfound.css"


const Notfound404 = () => {
    const history= useHistory();
    const gotohomepage=()=>{
    history.push("/home");

}

    return (
        <div className="text-center mb-5">
           <img src={pic} className="w-25 img " height="15%" alt="" />
          <p> <strong className="fs-3">404- page not found</strong> </p>
          <small>The page you are looking for might have been removed <br />had its name changed or is temporarily unavailable.</small><br /><br />
          <Button onClick={gotohomepage} className="btn btn-primary">Go To HomePage</Button>
            
        </div>
    );
};

export default Notfound404;