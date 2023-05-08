import { Container, Row } from "react-bootstrap";
import User from "./User";

// eslint-disable-next-line react/prop-types
const Users = ({ userData, deleteStudent, edithUser }) => {
  return (
    <Container>
    <Row>
    {
        // eslint-disable-next-line react/prop-types
            userData.map((user) => {
            return  <User userInfo={user} 
            key={user.id}
            // eslint-disable-next-line react/prop-types
            deleteStudent={deleteStudent}
            updateStudent={edithUser}
            />
        }) 
    }
    </Row> 
    </Container>
  )
} 

export default Users;



