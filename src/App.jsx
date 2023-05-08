import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap'
import Users from './Components/Users';
import AddUserForm from './Components/AddUserForm';
import "./App.css"
import Header from './Components/Header';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          name: "King Robert",
          email: "e.robert@gmail.com",
          gen: 24,
          id: "ct5764S"
        },
        {
          name: "Esther Robert",
          email: "e.esther@gmail.com",
          gen: 10,
          id: "ct1078S"
        },
        {
          name: "Samuel Robert",
          email: "e.sam@gmail.com",
          gen: 10,
          id: "ct0018S"
        },
      ],
    };
  }
  // Inverse Data Flow
  addNewStudent = (user)=>{
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }

  deleteStudent = (id)=>{
    let currentUsers = this.state.users.filter((user) => user.id !== id)
    this.setState({
      users: currentUsers
    })
  }

  updateStudentInfo = (id, updateStudent)=>{
    this.setState({
      users: this.state.users.map((user)=>user.id === id ? updateStudent : user),
    })
  }
  render(){
    return (
      <>
      <Header/>
      <Container className='home__cont'>
        <Row>
          <Col md="4">
          <h2>Register Student</h2>
            <AddUserForm addStudent={this.addNewStudent}/>
          </Col>
  
          <Col>
            <Users deleteStudent={this.deleteStudent} userData={this.state.users} edithUser={this.updateStudentInfo}/>
          </Col>
        </Row>
      </Container>  
      </>
    )
  } 
}

export default App
