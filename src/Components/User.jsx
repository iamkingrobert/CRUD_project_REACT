/* eslint-disable react/prop-types */
import { Card, Col, Modal } from "react-bootstrap"
import "./User.css"
import { useState } from "react";
import EditUserForm from "./EditUserForm";

const User = ({ userInfo, deleteStudent, updateStudent }) =>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle delete functionality 
  const deleteUser = (e) =>{
    e.preventDefault();
    deleteStudent(userInfo.id);
  }

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm userInfo={userInfo} updateStudent={updateStudent} closeModal={handleClose}/>
        </Modal.Body>
      </Modal>



    <Col md="4" className="user__col">
    <Card>
      <Card.Body className="user__body">
        <Card.Subtitle className="mb-2">Name: {userInfo.name}</Card.Subtitle>
        <p>Email: {userInfo.email}</p>
        <p>Gen: {userInfo.gen}</p>
        <Card.Link href="#" style={{color: "blue"}} onClick={handleShow}>EDIT</Card.Link>
        <Card.Link href="#" style={{color: "red"}} onClick={deleteUser}>DELETE</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    </>
  )
}

export default User;