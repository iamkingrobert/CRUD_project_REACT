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
      gen: 24
    },
    {
      name: "Esther Robert",
      email: "e.esther@gmail.com",
      gen: 10
    },
    {
      name: "Samuel Robert",
      email: "e.sam@gmail.com",
      gen: 10
    },
  ],
};
  }
  // Inverse Data Flow
  addNewStudent = (user)=>{
    this.setState({
      users: [...this.state.users, user]
    })
  }
  render(){
    return (
      <>
      <Header/>
      <Container className='home__cont'>
        <Row>
          <Col md="4">
          <AddUserForm addStudent={this.addNewStudent}/>
          </Col>
  
          <Col>
            <Users userData={this.state.users}/>
          </Col>
        </Row>
      </Container>  
      </>
    )

  } 
}

export default App
