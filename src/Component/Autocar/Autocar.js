import React from 'react';
import { Card, Col,Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Autocar = (props) => {
  const history=useHistory()

  const apply=()=>{
    history.push("/apply")
  }
  const {user}=useAuth();
    const {name,price,practical,automobile,theory,total}=props.fee;
    return (
    <div className="m-auto">
    <Col>
      <Card>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
                  <th className="text-center">{name}</th>
            </thead>
            <tbody>
                  <tr>
                   <td>{price}</td>
                  </tr>
                  <tr>
                   <td>{practical}</td>
                  </tr>
                  <tr>
                    <td>{automobile}</td>
                  </tr>
                  <tr>
                    <td>{theory}</td>
                  </tr>
                  <tr>
                    <td >{total}</td>
                  </tr>
            </tbody>
          </Table>
        </Card.Body> <br />

        {
          user.email?<p className="text-center" onClick={apply} ><Button className="bg-success">Apply</Button></p> 

         
         : <div>
              <p className="text-center"  data-bs-toggle="modal" data-bs-target="#exampleModal"><Button className="bg-success">Apply</Button></p> 

                {/* modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"      aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                          
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            you Have to login first!
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                              <Link to="/login"> ok</Link></button>
                            
                          </div>
                        </div>
                      </div>
                </div>
         </div>
        }
       </Card>
    </Col>
</div>
    );
};

export default Autocar;