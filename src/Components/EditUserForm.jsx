import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'


export default class EditUserForm extends Component {
  constructor(props){
    super(props);
    this.state={
      // eslint-disable-next-line react/prop-types
      name: props.userInfo.name,
      // eslint-disable-next-line react/prop-types
      email: props.userInfo.email,
      // eslint-disable-next-line react/prop-types
      gen: props.userInfo.gen,
      // eslint-disable-next-line react/prop-types
      id: props.userInfo.id,
    };
  }
   handleChange = (e)=>{
    e.preventDefault();
    this.setState({
    [e.target.name]: e.target.value,
    });
  };

  // Do something with the form data, such as sending it to a server
    handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.updateStudent(this.state.id, this.state)
    
    // Clear the form inputs
    this.setState({
      name: "",
      email: "",
      gen: "",
      });
      // eslint-disable-next-line react/prop-types
      this.props.closeModal();
     };

  render() {
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" name='name' value={this.state.name} onChange={this.handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" name='email' value={this.state.email} onChange={this.handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="number" placeholder="Enter Gen" name='gen' value={this.state.gen} onChange={this.handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    )
  }
}