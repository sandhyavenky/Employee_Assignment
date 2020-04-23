import React from 'react'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import history from './history';
import axios from 'axios'

class Update extends React.Component{
  constructor(props) {
    super(props);
    this.readEmployeeId = this.readEmployeeId.bind(this);
    this.displayEmployee = this.displayEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.submitEmployee = this.submitEmployee.bind(this);
    this.state = {           //json property
      emp: {
        fname: '',
        sname: '',
        email: '',
        dob: '',
        gender: ''
      }, empid: ""
    }  ; 
  } 
readEmployeeId(event){
  console.log(event.target.value)
  this.setState({empid: event.target.value})
  this.state.empid = '';
}
displayEmployee(){
  axios.get(`http://localhost:3001/${this.state.empid}`)
    .then(res=> {
      this.setState({emp: res.data, 
    });
  })
}
updateEmployee(event){
  this.setState({
    emp: Object.assign(this.state.emp, {[event.target.name]: event.target.value})
  })
}
submitEmployee(){
  axios.put(`http://localhost:3001/${this.state.empid}`, this.state.emp)
  .then(res => {
    this.setState({
      employeeStatus: res.data.message
    })
  })
}
render(){
  return(
    <div>
      {/* <Container fluid="sm" style={{paddingTop: 30, paddingBottom: 30}} > */}
      <Col sm={12} xs={12} style={{backgroundColor: 'lightblue'}}>
      <Form>
      <Form.Group align="left"> 
        <h1> Employee Management </h1>
      </Form.Group>
      <Form.Group align="left"> 
        Open book assignment submmitted by SANDHYA </Form.Group>
      <Form.Group><Row xs={1}>
        <Col xs={1}><Button variant="primary" type="submit" size="sm" active onClick={() => history.push('/Create')}> Create </Button></Col>
        <Col xs={1}><Button variant="primary" type="submit" size="sm" active onClick={() => history.push('/Read')}> Read </Button></Col>
        <Col xs={1}><Button variant="primary" type="submit" size="sm" active onClick={() => history.push('/Update')}> Update </Button></Col>
        <Col xs={1}><Button variant="primary" type="submit" size="sm" active onClick={() => history.push('/Delete')}> Delete </Button></Col>
      </Row></Form.Group>
      <hr></hr>
      <Form.Group> <Row> Update Existing Employee  </Row>
      </Form.Group>
      <hr></hr>
      <Form.Group><Row>
        <Col xs={2}>Employee ID</Col>
        <Col xs={3}> <Form.Control type="text" onChange={this.readEmployeeId} value={this.state.empid} /></Col>
      </Row></Form.Group>
      <Form.Group>
        <Col xs={1}><Button variant="primary" size="sm" onClick={this.displayEmployee} disabled={!this.state.empid}> Read </Button></Col>
      </Form.Group>
      <hr></hr>
      <Form.Group><Row>
        <Col xs={2}>First Name</Col>
        <Col xs={3}> <Form.Control type="text" name="fname" value={this.state.emp.fname} onChange={this.updateEmployee}/></Col>
      </Row></Form.Group>
      <Form.Group><Row>
        <Col xs={2}>Sur Name</Col>
        <Col xs={3}> <Form.Control type="text" name="sname" value={this.state.emp.sname}  onChange={this.updateEmployee}  /></Col>
      </Row></Form.Group>
      <Form.Group><Row>
        <Col xs={2}>Email</Col>
        <Col xs={3}> <Form.Control type="text" name="email" value={this.state.emp.email}  onChange={this.updateEmployee}  /></Col>
        </Row></Form.Group>
      </Form>
      <Form>
      <Form.Group><Row>
        <Col xs={2}>DOB</Col>
        <Col xs={3}> <Form.Control type="text" name="dob" value={this.state.emp.dob}  onChange={this.updateEmployee} /></Col>
        </Row></Form.Group>
        <Form.Group><Row>
          <Col xs={2}> Gender </Col>
          <Col xs={1}><Form.Check type="radio" name="gender" value="Male" onChange={this.updateEmployee} checked={this.state.emp.gender === "Male"}  label="Male" ></Form.Check></Col>
          <Col xs={1}><Form.Check type="radio" name="gender" value="Female"  onChange={this.updateEmployee} checked={this.state.emp.gender === "Female"} label="Female"></Form.Check></Col>
        </Row></Form.Group>
        <Form.Group>
          <Col xs={1}><Button variant="primary" size="sm" onClick={this.submitEmployee}> Update </Button></Col>
        </Form.Group>
        </Form>
        </Col>
      {/* </Container> */}
    </div>
  );
}
}

export default Update