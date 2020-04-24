import React from 'react'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import history from './history';
import axios from 'axios'
import ReactDom from 'react-dom'

window.render = () => {
  ReactDom.render(<Create/>, document.getElementById('root'));
}
class Create extends React.Component{
  constructor(props){
    super(props);
    this.createEmployee = this.createEmployee.bind(this);
    this.submitDetails = this.submitDetails.bind(this);
    this.state = {              
      emp: {
        empid: '',
        fname: '',
        sname: '',
        email: '',
        dob: '',
        gender: ''
      }  , employeeStatus: "" ,
      errormessage: ''
    };
  }
  createEmployee(event){
    const name = event.target.name;
    const value = event.target.value;
    let err = ''; 
    var employee = Object.assign(this.state.emp, {[event.target.name]:  event.target.value} ) 
    if ((name === "empid"),(name === "dob") ){
      if(value != "" && !Number(value)) {
        err = <strong> Please enter numeric values for Employee ID and Data of Birth</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({
      emp: employee           
    }); 
  }
submitDetails(){
  axios.post("http://localhost:3001/", this.state.emp)  
    .then(res => {
      this.setState({
        employeeStatus: res.data.status 
      })
    }) 
}
clearDetails = (e) => {   
  this.state.emp.empid=""
       window.render()
}
render(){
  return(
    <div>
      {/* <Container fluid="sm" style={{ paddingTop: 30, paddingBottom: 30}} > */}
      <Col sm={12} xs={12} style={{backgroundColor: 'lightblue'}}>
      <Form>
        <Form.Group align="left"> 
          <h1> Employee Management </h1>
        </Form.Group>
      <Form.Group align="left"> 
        Open book assignment submmitted by SANDHYA </Form.Group>
      <Form.Group><Row>
        <Col sm={1}><Button variant="primary" type="submit" size="sm" active onClick={() => history.push('/Create')}> Create </Button></Col>
        <Col sm={1}><Button variant="primary" type="submit" size="sm" active onClick={() => history.push('/Read')}> Read </Button></Col>
        <Col sm={1}><Button variant="primary" type="submit" size="sm" active onClick={() => history.push('/Update')}> Update </Button></Col>
        <Col sm={1}><Button variant="primary" type="submit" size="sm" active onClick={() => history.push('/Delete')}> Delete </Button></Col>
      </Row></Form.Group>
      <hr></hr>
      <Form.Group align="left"> 
        Create New Employee  
      </Form.Group>
      <hr color="lightblue"></hr>
      <Form.Group><Form.Row>
        <Col xs={2}>Employee ID</Col>
        <Col xs={3}> <Form.Control type="text" name="empid" value={this.state.emp.empid} onChange={this.createEmployee}/></Col>
      </Form.Row></Form.Group>
      <Form.Group><Form.Row>
        <Col xs={2}>First Name</Col>
        <Col xs={3}> <Form.Control type="text" name="fname" value={this.state.emp.fname} onChange={this.createEmployee}/></Col>
      </Form.Row></Form.Group>
      <Form.Group><Form.Row>
        <Col xs={2}>Sur Name</Col>
        <Col xs={3}> <Form.Control type="text" name="sname" value={this.state.emp.sname} onChange={this.createEmployee}/></Col>
      </Form.Row></Form.Group>
      <Form.Group><Form.Row>
        <Col xs={2}>Email</Col>
        <Col xs={3}> <Form.Control type="text" name="email" value={this.state.emp.email} onChange={this.createEmployee}/></Col>
        </Form.Row></Form.Group>
      </Form>
      <Form>
      <Form.Group><Form.Row>
        <Col xs={2}>DOB</Col>
        <Col xs={3}> <Form.Control type="text" name="dob" value={this.state.emp.dob} onChange={this.createEmployee} /></Col>
        </Form.Row></Form.Group>
        <Form.Group><Form.Row>
          <Col xs={2}> Gender </Col>
          <Col xs={1}><Form.Check type="radio" name="gender" value="Male" onChange={this.createEmployee} checked={this.state.emp.gender === "Male"} label="Male" ></Form.Check></Col>
          <Col xs={1}><Form.Check type="radio" name="gender" value="Female" onChange={this.createEmployee} checked={this.state.emp.gender === "Female"} label="Female"></Form.Check></Col>
        </Form.Row></Form.Group>
        <Form.Group><Form.Row>
          <Col xs={1}><Button variant="primary" size="sm" onClick={this.submitDetails}> Create </Button></Col>
          <Col xs={1}><Button variant="primary" size="sm" onClick={this.clearDetails}> Clear </Button></Col>
          </Form.Row></Form.Group>
          <hr></hr>
        <Form.Group align="centre" > 
        <Form.Row>{this.state.errormessage}</Form.Row>
        <hr></hr>
        <h4> {this.state.employeeStatus} </h4>
        </Form.Group>
        </Form>
        </Col>
      {/* </Container> */}
    </div>
  );
}
}

export default Create

