import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle}=useAuth();

    const location= useLocation()
    const history= useHistory();
    const redirect_uri= location.state?.from || "/coursefee";

    const signInHandler=()=>{

        signInUsingGoogle()
        .then((result)=>{
            history.push(redirect_uri);
           
            
        })

    }
    return (
        <div className="d-flex justify-content-around align-items-center">
            <div>
                <h1>Road Alert Driving centre</h1>
                <div className="border border-1 p-4 mt-4 ">
                <p >please login</p>
                <label htmlFor="inputEmail4" className="  form-label">Email</label>
                <input type="email" className="form-control " id="inputEmail4"/>  <br />
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control " id="inputEmail4"/>  <br />
                <div className="text-center"><button className=" btn btn-success" type="submit">submit</button></div><br />
                <div className="text-center">---------or---------</div>
                <p className="text-center"><button onClick={signInHandler}  className="btn btn-warning">google login</button></p>
                </div>
                <div className="text-center">.......New user?.......</div>
                <p className="text-center"><Link  to="/signup">signup</Link></p>



            </div>
            
        </div>
    );
};

export default Login;