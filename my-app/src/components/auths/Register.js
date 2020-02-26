import React, {useState} from 'react';
import {Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

function Register() {
    const [input, setInput] = useState({
        username: '',
        password: '',
    })

    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(input.username && input.password) {
            axios.post('http://localhost:5000/api/register', input)
            .then(res => {
                console.log(res);
                alert('Thank you for registering!');
                setInput({ username: '', password:'' });
            })
            .catch(err => {
                console.log('something went wrong', err)
            })
        } else {
            alert('Please enter a username and password');
        }
    }

    return (
        <div>
            <Container>
                <h1>Register</h1>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username:</Label>
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter Username"
                            value={input.username}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password:</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="Enter Password"
                            value={input.password}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Register;