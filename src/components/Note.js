import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
function Note(props){
    function handleClick()
    {
        props.onDelete(props.id);
    }
    return(
        <>
             <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header as="h5">{props.title}</Card.Header>
                                <Card.Body>
                                    <Card.Text>{props.content}</Card.Text>
                                    <Button className="" onClick={handleClick} variant="danger">Delete</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>
             
        </>
    );
}
export default Note;