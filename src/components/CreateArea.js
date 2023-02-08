import React, { useState } from "react";
import {Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './CreateArea.css'
function CreateArea(props){
    const[note,setNote]=useState({
        title:"",
        content:""
    });

    function handleChange(event){
        
        const{name,value}=event.target;

        setNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            };
        });
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        console.log(note);
        event.preventDefault();
    }
    return(
        <>
            <Container>
                <Row className="justify-content-lg-center mt-4">
                    <h1 className="text-center">Daily Notes</h1>
                    <form action="" className="create-note w-50">
                    <input type="text" 
                        name="title"
                        placeholder="Title"
                        onChange={handleChange}
                        value={note.title}
                    />
                    <textarea 
                            type="text"
                            name="content"
                            rows="3"
                            placeholder="Take a note"
                            onChange={handleChange}
                            value={note.content}
                    />
                    <Button className="mt-4" onClick={submitNote} variant="warning">Add</Button>{' '}
                    
                    </form>
                </Row>
            </Container>
            
        </>
    );
}
export default CreateArea;
