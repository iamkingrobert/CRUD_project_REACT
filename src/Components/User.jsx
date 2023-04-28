import { Card, Col } from "react-bootstrap"
import "./User.css"

const User = (props) =>{
  return (
    <Col md="4" className="user__col">
    <Card>
      <Card.Body className="user__body">
        <Card.Subtitle className="mb-2">Name: {props.userInfo.name}</Card.Subtitle>
        <p>Email: {props.userInfo.email}</p>
        <p>Gen: {props.userInfo.gen}</p>
        <Card.Link href="#" style={{color: "blue"}}>EDIT</Card.Link>
        <Card.Link href="#" style={{color: "red"}}>DELETE</Card.Link>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default User;