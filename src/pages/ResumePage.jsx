import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function ResumePage(){
    return (
        <div className="d-flex justify-content-around">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Resume</Card.Title>
              <Button variant="primary" href="https://www.linkedin.com/in/devan-ash-809283204">Linkedin Resume</Button>
            </Card.Body>
          </Card>
    
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Skills</Card.Title>
              <ListGroup>
                <ListGroup.Item>Hard Working</ListGroup.Item>
                <ListGroup.Item>Kind</ListGroup.Item>
                <ListGroup.Item>HTML</ListGroup.Item>
                <ListGroup.Item>CSS</ListGroup.Item>
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Nodejs</ListGroup.Item>
                <ListGroup.Item>MySql</ListGroup.Item>
                <ListGroup.Item>MongoDb</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      );
}