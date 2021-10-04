import React from 'react';
import { Card, Col,Button, Table } from 'react-bootstrap';

const Manualcar = (props) => {
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
                     <td className="text-end">{price}</td>
                    </tr>
                    <tr>
                     <td className="text-end">{practical}</td>
                    </tr>
                    <tr>
                      <td className="text-end">{automobile}</td>
                    </tr>
                    <tr>
                      <td className="text-end">{theory}</td>
                    </tr>
                    <tr>
                      <td className="text-end">{total}</td>
                    </tr>
              </tbody>
            </Table>
          </Card.Body> <br />
  
          <p className="text-center" data-bs-toggle="modal" data-bs-target="#exampleModal"><Button className="bg-success">Apply</Button></p> 
  
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
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">ok</button>
                      
                    </div>
                  </div>
                </div>
           </div>
         </Card>
      </Col>
  </div>
    );
};

export default Manualcar;